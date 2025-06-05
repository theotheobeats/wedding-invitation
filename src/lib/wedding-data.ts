export type MultilingualString = {
  id: string;
  en: string;
  ja: string;
};

export interface WeddingData {
  bride: {
    nickname: string;
    fullName: string;
    parentInfo: MultilingualString;
    father: string;
    mother: string;
    instagram: string;
    photo: string;
  };
  groom: {
    nickname: string;
    fullName: string;
    parentInfo: MultilingualString;
    father: string;
    mother: string;
    instagram: string;
    photo: string;
  };
  events: {
    reception: {
      date: string;
      time: string;
      venue: string;
      address: string;
      shareLocation: string;
    };
    blessing: {
      date: string;
      time: string;
      venue: string;
      address: string;
      shareLocation: string;
    };
  };
  digitalGift: {
    bank: string;
    accountName: string;
    accountNumber: string;
  };
  loveStory: {
    meeting: {
      title: MultilingualString;
      date: string;
      description: MultilingualString;
    };
    commitment: {
      title: MultilingualString;
      date: string;
      description: MultilingualString;
    };
    engagement: {
      title: MultilingualString;
      date: string;
      description: MultilingualString;
    };
  };
  music?: string;
}

export const weddingData: WeddingData = {
  bride: {
    nickname: "Gressy",
    fullName: "Gressy Lasria Silitonga",
    parentInfo: {
      id: "Putri pertama dari Bapak",
      en: "The first daughter of Mr.",
      ja: "様ご夫妻の長女"
    },
    father: "Rexson Pernando Silitonga",
    mother: "Hayati Pelita Pasaribu",
    instagram: "gressychia_",
    photo: "https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbIQBtJjXaKL9NjAoB0Z6CYvwbuVFQWUXzxqIe"
  },
  groom: {
    nickname: "Sho",
    fullName: "Sho Kishimoto",
    parentInfo: {
      id: "Putra pertama dari Bapak",
      en: "The first son of Mr.",
      ja: "様ご夫妻の長男"
    },
    father: "Youji Kishimoto",
    mother: "Ikuyo Kishimoto",
    instagram: "",
    photo: "https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbGshH14OCfFdA9jbwVolHW4nXs8pSuROYk06e"
  },
  events: {
    reception: {
      date: "16 Juni 2025",
      time: "18.00",
      venue: "Airish Hotel PALEMBANG",
      address: "Airish Hotel PALEMBANG",
      shareLocation: "https://www.google.com/maps?sca_esv=584e7b64051bdf01&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmFpcmlzaCBob3RlbCBwYWxlbWJhbmcyERAuGIAEGMcBGJgFGJkFGK8BMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIgEC4YgAQYxwEYmAUYmQUYrwEYlwUY3AQY3gQY4ATYAQFIqhhQpQNY0hdwAXgBkAEAmAF5oAHLC6oBBDE5LjG4AQPIAQD4AQGYAhWgAqMMwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICBRAhGKABwgIEECEYFcICBxAhGKABGArCAggQABiABBiiBMICBRAAGO8FwgIIEAAYogQYiQXCAgcQABiABBgKmAMAiAYBkAYKugYGCAEQARgUkgcEMTguM6AH2pwBsgcEMTcuM7gHmgzCBwcwLjExLjEwyAdD&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KcP7fLVSdzsuMTjrevy081II&daddr=Jl.+Sukabangun+1+No.2233,+Suka+Bangun,+Kec.+Sukarami,+Kota+Palembang,+Sumatera+Selatan+30151"
    },
    blessing: {
      date: "16 Juni 2025",
      time: "10.00",
      venue: "GBI MPI PALEMBANG",
      address: "GBI MPI PALEMBANG",
      shareLocation: "https://g.co/kgs/Jg6f8Ye"
    }
  },
  digitalGift: {
    bank: "BNI",
    accountName: "GRESSY LASRIA",
    accountNumber: "0327562630"
  },
  loveStory: {
    meeting: {
      title: {
        id: "Pertemuan Pertama",
        en: "Our First Meeting",
        ja: "最初の出会い"
      },
      date: "2022",
      description: {
        id: "Pertemuan pertama kami di Tahun 2022 saat Sho ditunjuk sebagai pembimbing untuk Gressy yang saat itu baru mulai bekerja di Osaka, Jepang.",
        en: "Our first meeting was in 2022 when Sho was appointed as a mentor for Gressy, who had just started working in Osaka, Japan at that time.",
        ja: "私たちの最初の出会いは2022年、当時大阪で働き始めたばかりのグレシーの指導者としてショウが任命された時でした。"
      }
    },
    commitment: {
      title: {
        id: "Memutuskan Berkomitmen",
        en: "Deciding to Commit",
        ja: "コミットメントの決定"
      },
      date: "2022",
      description: {
        id: "Banyaknya perbedaan diantara kami, membuat kami lebih kritis dalam mengambil keputusan. Saat itu kami berdua tidak mau memulai, jika perbedaan yang ada membuat kami tidak bisa melanjutkannya. Setelah menyatukan pandangan dan merasa cocok, kami berkomitmen untuk menikah dan memutuskan untuk berpacaran. Karena saat itu kami berpendapat bahwa pacaran tidak berarti jika tidak menikah.",
        en: "The many differences between us made us more critical in making decisions. At that time, neither of us wanted to start if the existing differences meant we couldn't continue. After aligning our views and feeling compatible, we committed to marrying and decided to date. Because at that time, we believed that dating was meaningless if not leading to marriage.",
        ja: "私たちの間には多くの違いがあり、それが意思決定において私たちをより批判的にさせました。当時、既存の違いが私たちが続けることができないことを意味するならば、私たちのどちらも始めたくありませんでした。私たちの見解を一致させ、互換性があると感じた後、私たちは結婚することを約束し、デートすることにしました。なぜなら、当時、結婚につながらないデートは無意味だと信じていたからです。"
      }
    },
    engagement: {
      title: {
        id: "Lamaran",
        en: "Engagement",
        ja: "婚約"
      },
      date: "2025",
      description: {
        id: "Sudah 2 tahun lebih sejak kami mulai berkomitmen, namun kontrak kerja Gressy yang tidak memungkinkan untuk pulang ke Indonesia dalam kurun waktu kurang dari 3 tahun, membuat acara lamaran dan pernikahan kami harus dilakukan dalam minggu yang sama.",
        en: "It has been over 2 years since we committed, but Gressy's work contract, which does not allow her to return to Indonesia in less than 3 years, means our engagement and wedding ceremonies must be held in the same week.",
        ja: "私たちがコミットしてから2年以上が経ちましたが、グレシーの労働契約では3年以内にインドネシアに帰国できないため、婚約式と結婚式を同じ週に行う必要があります。"
      }
    }
  }
};

// Wedding date for countdown and other components
export const weddingDate = new Date('2025-06-16T10:00:00');

// Couple names for easy access
export const coupleNames = `${weddingData.bride.nickname} & ${weddingData.groom.nickname}`; 