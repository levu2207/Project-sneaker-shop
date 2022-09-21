const products = [
  {
    id: 1,
    brand: "NIKE",
    name: "AIR MAX 270",
    price: "1.950.000đ",
    sale: 10,
    img1: "../../Assets/image/products/id-1/air-max-1.png",
    img2: "../../Assets/image/products/id-1/air-max-2.png",
    img3: "../../Assets/image/products/id-1/air-max-3.png",
    img4: "../../Assets/image/products/id-1/air-max-4.png",
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "ULTRABOOST SOLAR 19",
    price: "1.650.000đ",
    sale: "15%",
    img1: "./image/img/das-solar1.jpg",
    img2: "./image/img/das-solar2.jpg",
    img3: "./image/img/das-solar3.jpg",
    img4: "./image/img/das-solar4.jpg",
    img5: "./image/img/das-solar5.jpg",
  },
  {
    id: 3,
    brand: "VANS",
    name: "FACTORY OLD SKOOL",
    price: "1.750.000đ",
    sale: "20%",
    img1: "./image/img/vans1.jpg",
    img2: "./image/img/vans2.jpg",
    img3: "./image/img/vans3.jpg",
    img4: "./image/img/vans4.jpg",
    img5: "./image/img/vans5.jpg",
  },
  {
    id: 4,
    brand: "ASICS",
    name: "GEL LYTE BALTIC",
    price: "1.500.000đ",
    sale: "10%",
    img1: "./image/img/asics1.jpg",
    img2: "./image/img/asics2.jpg",
    img3: "./image/img/asics3.jpg",
    img4: "./image/img/asics4.jpg",
    img5: "./image/img/asics5.jpg",
  },
  {
    id: 5,
    brand: "NEW BALENCE",
    name: "574 CLASSIC",
    price: "1.700.000đ",
    sale: "10%",
    img1: "./image/img/nb1.jpg",
    img2: "./image/img/nb2.jpg",
    img3: "./image/img/nb3.jpg",
    img4: "./image/img/nb4.jpg",
    img5: "./image/img/nb5.jpg",
  },
  {
    id: 6,
    brand: "JORDAN",
    name: "ONE MID",
    price: "1.900.000đ",
    sale: "10%",
    img1: "./image/img/jd1.jpg",
    img2: "./image/img/jd2.jpg",
    img3: "./image/img/jd3.jpg",
    img4: "./image/img/jd4.jpg",
    img5: "./image/img/jd5.jpg",
  },
  {
    id: 7,
    brand: "NIKE",
    name: "AIR FORCE 1 PIXEL",
    price: "1.700.000đ",
    sale: "15%",
    img1: "./image/img/air1.jpg",
    img2: "./image/img/air2.jpg",
    img3: "./image/img/air3.jpg",
    img4: "./image/img/air4.jpg",
    img5: "./image/img/air5.jpg",
  },
  {
    id: 8,
    brand: "NIKE",
    name: "AIR MAX 90 INFRARED",
    price: "1.800.000đ",
    sale: "20%",
    img1: "./image/img/air901.jpg",
    img2: "./image/img/air902.jpg",
    img3: "./image/img/air903.jpg",
    img4: "./image/img/air904.jpg",
    img5: "./image/img/air905.jpg",
  },
  {
    id: 9,
    brand: "NIKE",
    name: "REACT VISION",
    price: "2.200.000đ",
    sale: "15%",
    img1: "./image/img/react1.jpg",
    img2: "./image/img/react2.jpg",
    img3: "./image/img/react3.jpg",
    img4: "./image/img/react4.jpg",
    img5: "./image/img/react5.jpg",
  },
  {
    id: 10,
    brand: "NIKE",
    name: "REACT VISION",
    price: "1.500.000đ",
    sale: "20%",
    img1: "./image/img/presto1.jpg",
    img2: "./image/img/presto2.jpg",
    img3: "./image/img/presto3.jpg",
    img4: "./image/img/presto4.jpg",
    img5: "./image/img/presto5.jpg",
  },
  {
    id: 11,
    brand: "REEBOK",
    name: "REVENGE LEGACY",
    price: "1.300.000đ",
    sale: "10%",
    img1: "./image/img/reb1.jpg",
    img2: "./image/img/reb2.jpg",
    img3: "./image/img/reb3.jpg",
    img4: "./image/img/reb4.jpg",
    img5: "./image/img/reb5.jpg",
  },
  {
    id: 12,
    brand: "DIADORA",
    name: "TITAN LEATHER LS",
    price: "1.800.000đ",
    sale: "10%",
    img1: "./image/img/dia1.jpg",
    img2: "./image/img/dia2.jpg",
    img3: "./image/img/dia3.jpg",
    img4: "./image/img/dia4.jpg",
    img5: "./image/img/dia5.jpg",
  },
  {
    id: 13,
    brand: "NIKE",
    name: "VIRGIL ABLOH",
    price: "2.100.000đ",
    sale: "15%",
    img1: "./image/img/vir1.jpg",
    img2: "./image/img/vir2.jpg",
    img3: "./image/img/vir3.jpg",
    img4: "./image/img/vir4.jpg",
    img5: "./image/img/vir5.jpg",
  },
  {
    id: 14,
    brand: "CONVERSE",
    name: "CHUCK TAYLOR",
    price: "1.200.000đ",
    sale: "10%",
    img1: "./image/img/con1.jpg",
    img2: "./image/img/con2.jpg",
    img3: "./image/img/con3.jpg",
    img4: "./image/img/con4.jpg",
    img5: "./image/img/con5.jpg",
  },
  {
    id: 15,
    brand: "NIKE",
    name: "AIR MAX BETRUE",
    price: "1.900.000đ",
    sale: "15%",
    img1: "./image/img/airpre1.jpg",
    img2: "./image/img/airpre2.jpg",
    img3: "./image/img/airpre3.jpg",
    img4: "./image/img/airpre4.jpg",
    img5: "./image/img/airpre5.jpg",
  },
  {
    id: 16,
    brand: "PUMA",
    name: "WILD RIDER",
    price: "1.200.000đ",
    sale: "10%",
    img1: "./image/img/wild1.jpg",
    img2: "./image/img/wild2.jpg",
    img3: "./image/img/wild3.jpg",
    img4: "./image/img/wild4.jpg",
    img5: "./image/img/wild5.jpg",
  },
  {
    id: 17,
    brand: "PUMA",
    name: "MIRAGE TECH",
    price: "1.800.000đ",
    sale: "20%",
    img1: "./image/img/mira1.jpg",
    img2: "./image/img/mira2.jpg",
    img3: "./image/img/mira3.jpg",
    img4: "./image/img/mira4.jpg",
    img5: "./image/img/mira5.jpg",
  },
  {
    id: 18,
    brand: "NEW BALANCE",
    name: "MS327BC",
    price: "1.400.000đ",
    sale: "15%",
    img1: "./image/img/ws1.jpg",
    img2: "./image/img/ws2.jpg",
    img3: "./image/img/ws3.jpg",
    img4: "./image/img/ws4.jpg",
    img5: "./image/img/ws5.jpg",
  },
  {
    id: 19,
    brand: "JORDAN",
    name: "SPIZIKE",
    price: "1.500.000đ",
    sale: "15%",
    img1: "./image/img/spi1.jpg",
    img2: "./image/img/sp2.jpg",
    img3: "./image/img/spi3.jpg",
    img4: "./image/img/spi4.jpg",
    img5: "./image/img/spi5.jpg",
  },
  {
    id: 20,
    brand: "REEBOK",
    name: "CLUB C 85 PRIDE",
    price: "1.800.000đ",
    sale: "15%",
    img1: "./image/img/club1.jpg",
    img2: "./image/img/club2.jpg",
    img3: "./image/img/sp3.jpg",
    img4: "./image/img/club4.jpg",
    img5: "./image/img/club5.jpg",
  },
  {
    id: 21,
    brand: "ADIDAS",
    name: "ZX 1000 C",
    price: "1.700.000đ",
    sale: "25%",
    img1: "./image/img/zx1.jpg",
    img2: "./image/img/zx2.jpg",
    img3: "./image/img/zx3.jpg",
    img4: "./image/img/zx4.jpg",
    img5: "./image/img/zx5.jpg",
  },
  {
    id: 22,
    brand: "JORDAN",
    name: "RETRO HOT PUNCH",
    price: "1.600.000đ",
    sale: "25%",
    img1: "./image/img/mid1.jpg",
    img2: "./image/img/mid2.jpg",
    img3: "./image/img/mid3.jpg",
    img4: "./image/img/mid4.jpg",
    img5: "./image/img/mid5.jpg",
  },
  {
    id: 23,
    brand: "SAUCONY",
    name: "SHADOW 6000",
    price: "1.900.000đ",
    sale: "25%",
    img1: "./image/img/sh1.jpg",
    img2: "./image/img/sh2.jpg",
    img3: "./image/img/sh3.jpg",
    img4: "./image/img/sh4.jpg",
    img5: "./image/img/sh5.jpg",
  },
  {
    id: 24,
    brand: "JORDAN",
    name: "OG CHICAGO PE",
    price: "2.900.000đ",
    sale: "10%",
    img1: "./image/img/fi1.jpg",
    img2: "./image/img/fi2.jpg",
    img3: "./image/img/fi3.jpg",
    img4: "./image/img/fi4.jpg",
    img5: "./image/img/fi5.jpg",
  },
  {
    id: 25,
    brand: "NIKE",
    name: "AIR MAX SEERSUCKER",
    price: "2.300.000đ",
    sale: "15%",
    img1: "./image/img/pat1.jpg",
    img2: "./image/img/pat2.jpg",
    img3: "./image/img/pat3.jpg",
    img4: "./image/img/pat4.jpg",
    img5: "./image/img/pat5.jpg",
  },
  {
    id: 26,
    brand: "ADIDAS",
    name: "FORUM",
    price: "1.700.000đ",
    sale: "10%",
    img1: "./image/img/forum2.jpg",
    img2: "./image/img/forum1.jpg",
    img3: "./image/img/forum3.jpg",
    img4: "./image/img/forum4.jpg",
    img5: "./image/img/forum5.jpg",
  },
  {
    id: 27,
    brand: "NIKE",
    name: "AIR MAX 97",
    price: "1.700.000đ",
    sale: "20%",
    img1: "./image/img/97f1.jpg",
    img2: "./image/img/97f2.jpg",
    img3: "./image/img/97f3.jpg",
    img4: "./image/img/97f4.jpg",
    img5: "./image/img/97f5.jpg",
  },
  {
    id: 28,
    brand: "NIKE",
    name: "HUARACHE",
    price: "1.500.000đ",
    sale: "10%",
    img1: "./image/img/hua1.jpg",
    img2: "./image/img/hua2.jpg",
    img3: "./image/img/hua3.jpg",
    img4: "./image/img/hua4.jpg",
    img5: "./image/img/hua5.jpg",
  },
  {
    id: 29,
    brand: "NIKE",
    name: "HUARACHE",
    price: "1.700.000đ",
    sale: "15%",
    img1: "./image/img/3271.jpg",
    img2: "./image/img/3272.jpg",
    img3: "./image/img/3273.jpg",
    img4: "./image/img/3274.jpg",
    img5: "./image/img/3275.jpg",
  },
  {
    id: 30,
    brand: "ADIDAS",
    name: "FORUM",
    price: "1.700.000đ",
    sale: "10%",
    img1: "./image/img/forum2.jpg",
    img2: "./image/img/forum1.jpg",
    img3: "./image/img/forum3.jpg",
    img4: "./image/img/forum4.jpg",
    img5: "./image/img/forum5.jpg",
  },
];

export default products;
