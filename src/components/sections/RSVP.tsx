'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  attendance: z.string({
    required_error: "Please select an attendance option.",
  }),
  guests: z.string({
    required_error: "Please select number of guests.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms.",
  }),
});

// Sample wishes data
const wishes = [
  {
    id: 1,
    name: 'Ve',
    message: 'Congrats',
    attendance: 'attending',
    date: '6 bulan, 2 minggu yang lalu',
  },
  {
    id: 2,
    name: 'FJFJ',
    message: 'Congrats yah for ngoni dua',
    attendance: 'attending',
    date: '6 bulan, 3 minggu yang lalu',
  },
  {
    id: 3,
    name: 'J',
    message: 'Ji',
    attendance: 'not-attending',
    date: '7 bulan, 1 minggu yang lalu',
  },
];

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <section className="section-padding py-20 bg-muted">
      <div className="container-wedding">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Image
              src="https://ext.same-assets.com/1904390701/1788928505.svg"
              alt="RSVP"
              width={40}
              height={40}
              className="mr-2"
            />
            <Image
              src="https://ext.same-assets.com/1904390701/857206430.svg"
              alt="RSVP"
              width={40}
              height={40}
            />
          </div>
          <h2 className="section-title">RSVP, Doa & Ucapan</h2>
          <p className="max-w-lg mx-auto mb-8">
            Doakan dan berikan ucapan terbaik untuk Kami di hari pernikahan
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <motion.div
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl mb-6 text-center">Konfirmasi Kehadiran</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
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
                      <FormLabel>Konfirmasi Kehadiran</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select attendance" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="attending">Hadir</SelectItem>
                          <SelectItem value="not-attending">Tidak Hadir</SelectItem>
                          <SelectItem value="not-sure">Belum Pasti</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Tamu</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 orang</SelectItem>
                          <SelectItem value="2">2 orang</SelectItem>
                          <SelectItem value="3">3 orang</SelectItem>
                          <SelectItem value="4">4 orang</SelectItem>
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
                      <FormLabel>Ucapan & Doa</FormLabel>
                      <FormControl>
                        <Input placeholder="Write your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Saya menyetujui bahwa ucapan saya akan ditampilkan
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Terkirim!" : "Kirim Ucapan"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Wishes List */}
          <motion.div
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl mb-6 text-center">Ucapan & Doa ({wishes.length})</h3>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {wishes.map((wish) => (
                <div key={wish.id} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                      <Image
                        src="https://ext.same-assets.com/1904390701/3530049520.png"
                        alt="User"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{wish.name}</h4>
                      <div className="flex items-center">
                        <Image
                          src={wish.attendance === 'attending'
                            ? "https://ext.same-assets.com/1904390701/499135800.svg"
                            : "https://ext.same-assets.com/1904390701/1098630549.svg"}
                          alt="Attendance"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-xs text-muted-foreground">
                          {wish.attendance === 'attending' ? 'Hadir' : 'Tidak Hadir'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-1">{wish.message}</p>
                  <span className="text-xs text-muted-foreground">{wish.date}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-4 border-t">
              <p className="text-sm italic">
                "Semoga Allah memberkahimu dan memberkahi apa yang menjadi tanggung jawabmu, serta menyatukan kalian berdua dalam kebaikan."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
