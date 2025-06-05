export interface WeddingData {
  bride: {
    nickname: string;
    fullName: string;
    parentInfo: string;
    father: string;
    mother: string;
    instagram: string;
    photo: string;
  };
  groom: {
    nickname: string;
    fullName: string;
    parentInfo: string;
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
      title: string;
      date: string;
      description: string;
    };
    commitment: {
      title: string;
      date: string;
      description: string;
    };
    engagement: {
      title: string;
      date: string;
      description: string;
    };
  };
  music?: string;
}

export const weddingData: WeddingData = {
  bride: {
    nickname: "Gressy",
    fullName: "Gressy Lasria Silitonga",
    parentInfo: "Putri pertama dari",
    father: "Rexson Pernando Silitonga",
    mother: "Hayati Pelita Pasaribu",
    instagram: "gressychia_",
    photo: "https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbIQBtJjXaKL9NjAoB0Z6CYvwbuVFQWUXzxqIe"
  },
  groom: {
    nickname: "Sho",
    fullName: "Sho Kishimoto",
    parentInfo: "Putra pertama dari",
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
      title: "Pertemuan",
      date: "2022",
      description: "Pertemuan pertama kami di Tahun 2022 saat Sho ditunjuk sebagai pembimbing untuk Gressy yang saat itu baru mulai bekerja di Osaka, Jepang."
    },
    commitment: {
      title: "Berkomitmen",
      date: "2022",
      description: "Banyaknya perbedaan diantara kami, membuat kami lebih kritis dalam mengambil keputusan. Saat itu kami berdua tidak mau memulai, jika perbedaan yang ada membuat kami tidak bisa melanjutkannya. Setelah menyatukan pandangan dan merasa cocok, kami berkomitmen untuk menikah dan memutuskan untuk berpacaran. Karena saat itu kami berpendapat bahwa pacaran tidak berarti jika tidak menikah."
    },
    engagement: {
      title: "Lamaran",
      date: "2025",
      description: "Sudah 2 tahun lebih sejak kami mulai berkomitmen, namun kontrak kerja Gressy yang tidak memungkinkan untuk pulang ke Indonesia dalam kurun waktu kurang dari 3 tahun, membuat acara lamaran dan pernikahan kami harus dilakukan dalam minggu yang sama."
    }
  }
};

// Wedding date for countdown and other components
export const weddingDate = new Date('2025-06-16T10:00:00');

// Couple names for easy access
export const coupleNames = `${weddingData.bride.nickname} & ${weddingData.groom.nickname}`; 