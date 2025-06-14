'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import FloatingParticles from '../ui/FloatingParticles';
import { fetchComments, submitComment, Comment } from "@/lib/api";
import { useLanguage } from "@/contexts/LanguageContext";

// formSchema is now a function that takes translate
const getFormSchema = (translate: (key: string) => string) => z.object({
  name: z.string().min(2, {
    message: translate("rsvpSection.validation.nameMin"),
  }),
  attendance: z.enum(['PRESENT', 'NOT_PRESENT', 'MAYBE'], {
    required_error: translate("rsvpSection.validation.attendanceRequired"),
  }),
  message: z.string().min(2, {
    message: translate("rsvpSection.validation.messageMin"),
  }),
  terms: z.boolean().refine(val => val === true, {
    message: translate("rsvpSection.validation.termsRequired"),
  }),
});

export default function RSVP() {
  const { translate, language } = useLanguage(); // useLanguage hook

  const formSchema = useMemo(() => getFormSchema(translate), [translate]); // memoize schema

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  // formatDate moved inside the component to access language context
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    let locale;
    switch (language) {
      case 'id':
        locale = 'id-ID';
        break;
      case 'ja':
        locale = 'ja-JP';
        break;
      case 'en':
      default:
        locale = 'en-US'; // Default to English (US)
        break;
    }
    return date.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const form = useForm<z.infer<ReturnType<typeof getFormSchema>>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      terms: false,
      // attendance will be undefined by default, placeholder will show
    },
  });

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
      } catch (err) {
        console.error('Failed to load comments:', err);
        setError(translate('rsvpSection.errorLoadComments')); // Translated error
      }
    };
    loadComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translate]); // Added translate to dependencies as it's used in setError

  async function onSubmit(values: z.infer<ReturnType<typeof getFormSchema>>) {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Submitting values:', values);
      const comment = await submitComment({
        content: values.message,
        author: values.name,
        isPresent: values.attendance,
        authorId: Math.random().toString(36).substring(7),
      });
      console.log('Server response:', comment);
      setComments(prevComments => [comment, ...prevComments]);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to submit comment:', err);
      if (err instanceof Error) {
        setError(err.message || translate('rsvpSection.errorSubmit')); // Translated error
      } else {
        setError(translate('rsvpSection.errorSubmit')); // Translated error
      }
    } finally {
      setIsLoading(false);
    }
  }

  const getAttendanceDisplay = (isPresentStatus: 'PRESENT' | 'NOT_PRESENT' | 'MAYBE') => {
    switch (isPresentStatus) {
      case 'PRESENT': return translate('guestBookSection.attendancePresent');
      case 'NOT_PRESENT': return translate('guestBookSection.attendanceNotPresent');
      case 'MAYBE': return translate('guestBookSection.attendanceMaybe');
      default: return "";
    }
  }

  return (
    <section className="relative section-padding py-20 bg-muted overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={4} className="z-10" />
      
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-20 left-8 w-80 h-80 border border-primary/8 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 right-12 w-64 h-64 border border-secondary/10 rounded-full z-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-40 h-40 border border-primary/6 rounded-full z-15 animate-pulse delay-500"></div>
      
      <div className="container-wedding relative z-20">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
            <Image
              src="https://ext.same-assets.com/1904390701/1788928505.svg"
              alt={translate('rsvpSection.headerIconAlt')}
                width={50}
                height={50}
                className="mr-3 opacity-80"
            />
            <Image
              src="https://ext.same-assets.com/1904390701/857206430.svg"
              alt={translate('rsvpSection.headerIconAlt')}
                width={50}
                height={50}
                className="opacity-80"
            />
          </div>
          </motion.div>
          
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {translate('rsvpSection.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {translate('rsvpSection.subtitle')}
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Enhanced Form Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              {/* Form Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white" aria-label={translate('rsvpSection.formHeaderIconAlt')}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="currentColor"/>
                  </svg>
                </motion.div>
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-2">{translate('rsvpSection.formTitle')}</h3>
                <p className="text-gray-600">{translate('rsvpSection.formSubtitle')}</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                  {error}
                </div>
              )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg font-semibold text-primary">{translate('rsvpSection.labelName')}</FormLabel>
                      <FormControl>
                          <Input 
                            placeholder={translate('rsvpSection.placeholderName')} 
                            {...field} 
                            className="h-12 rounded-xl border-2 border-gray-200 focus:border-primary transition-colors"
                          />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attendance"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg font-semibold text-primary">{translate('rsvpSection.labelAttendance')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 focus:border-primary">
                              <SelectValue placeholder={translate('rsvpSection.placeholderAttendance')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                              <SelectItem value="PRESENT">{translate('rsvpSection.optionPresent')}</SelectItem>
                              <SelectItem value="NOT_PRESENT">{translate('rsvpSection.optionNotPresent')}</SelectItem>
                              <SelectItem value="MAYBE">{translate('rsvpSection.optionMaybe')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg font-semibold text-primary">{translate('rsvpSection.labelMessage')}</FormLabel>
                      <FormControl>
                          <textarea 
                            placeholder={translate('rsvpSection.placeholderMessage')}
                            {...field}
                            rows={4}
                            className="w-full rounded-xl border-2 border-gray-200 focus:border-primary transition-colors p-4 resize-none"
                          />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-gray-50 rounded-xl">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                            className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            {translate('rsvpSection.labelTerms')}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                <Button
                  type="submit"
                      className="w-full h-14 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transition-all duration-300 font-semibold text-lg rounded-xl"
                      disabled={isSubmitted || isLoading}
                >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {translate('rsvpSection.buttonSubmitting')}
                        </>
                      ) : isSubmitted ? (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {translate('rsvpSection.buttonSuccess')}
                        </>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" aria-label={translate('rsvpSection.buttonSubmitIconAlt')}>
                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {translate('rsvpSection.buttonSubmit')}
                        </>
                      )}
                </Button>
                  </motion.div>
              </form>
            </Form>
            </div>
          </motion.div>

          {/* Comments List Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              {/* Comments Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white" aria-label={translate('guestBookSection.headerIconAlt')}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
                  </svg>
                </motion.div>
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-2">{translate('guestBookSection.commentsHeader')}</h3>
                <p className="text-gray-600">
                  {translate('guestBookSection.commentsCountPrefix')}{comments.length}{translate('guestBookSection.commentsCountSuffix')}
                </p>
              </div>

              {/* Comments List */}
              <div className="space-y-6 max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {comments.map((comment, index) => (
                  <motion.div 
                    key={comment.id} 
                    className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {comment.author.charAt(0).toUpperCase()}
                        </span>
                    </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg text-primary">{comment.author}</h4>
                          <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
                            <div className={`w-2 h-2 rounded-full mr-2 ${
                              comment.isPresent === 'PRESENT' ? 'bg-green-500' : 
                              comment.isPresent === 'NOT_PRESENT' ? 'bg-red-500' : 
                              'bg-yellow-500'
                            }`}></div>
                            <span className="text-xs font-medium">
                              {getAttendanceDisplay(comment.isPresent)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                    <span className="text-xs text-gray-500 font-medium">
                      {formatDate(comment.createdAt)}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bible Quote Section */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white" aria-label={translate('rsvpSection.bibleQuoteIconAlt')}>
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <p className="font-playfair text-lg md:text-xl text-primary italic leading-relaxed mb-3">
                    {translate('rsvpSection.bibleQuote.text')}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {translate('rsvpSection.bibleQuote.reference')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
