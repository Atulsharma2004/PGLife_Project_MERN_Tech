const mongoose = require('mongoose')

// product section
const schemaProduct = mongoose.Schema({
  city: String,
  hostels: [
    {
      name: String,
      address: String,
      exteriorImage: {
        url: String,
        alt: String,
      },
      interiorImage: {
        url: String,
        alt: String,
      },
      filter: String,
      rent: String,
      email: String,
      phone: String,
    },
  ],
})

const productModel = mongoose.model("product", schemaProduct)

// const sampleData = [
//   {
//     city: 'Bangalore',
//     hostels: [
//       {
//         name: 'Zostel Bangalore',
//         address: '2032, 17th Main, 1st Cross Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038, India',
//         exteriorImage: {
//           url: "https://c8.alamy.com/comp/2GNCB96/modern-youth-hostel-building-accommodation-for-travellers-building-exterior-2GNCB96.jpg",
//           alt: "Exterior of Zostel Bangalore Hostel",
//         },
//         interiorImage: {
//           url: "https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg",
//           alt: "Interior of Zostel Bangalore Hostel"
//         },
//         filter: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png",
//         rent: '8000',
//         email: "scott29@example.com",
//         phone: "7392742746"
//       },
//       {
//         name: "Hackerpacker Hostel ",
//         address: "Villa no.526, 17th D Main Rd, 6th Block, Bengaluru, Karnataka 560095",
//         exteriorImage: {
//           url: "https://hostelnerds.com/wp-content/uploads/2018/03/hostel-architecture-plan.jpg",
//           alt: "Exterior of Hackerpacker Hostel"
//         },
//         interiorImage: {
//           url: "https://i.ytimg.com/vi/nN1rD4N0j64/maxresdefault.jpg",
//           alt: "Interior of Hackerpacker Hostel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '10000',
//         email: "johndoe@example.com",
//         phone: "7398732746"
//       },
//       {
//         name: "BE ANIMAL Hostel",
//         address: "395, 18th Main Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095",
//         exteriorImage: {
//           url: "https://goodhomes.wwmindia.com/content/2021/aug/18design1628580612.jpg",
//           alt: "Exterior of BE ANIMAL Hostel",
//         },
//         interiorImage: {
//           url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374739839.jpg?k=68ed14c48df650be5d80884d5253b2fb534c856592aa62f33785d2f9da0e4c13&o=&hp=1",
//           alt: "Interior of BE ANIMAL Hostel"
//         },
//         filter: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4puxGbmnMq_RS-NtqwH8oN_Mnd3sEB3zMA&usqp=CAU",
//         rent: '10000',
//         email: "janesmith@example.com",
//         phone: "9802742746"
//       },
//       {
//         name: "The Hood Hostel",
//         address: "63, 2A cross, 17th H Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
//         exteriorImage: {
//           url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/147154137.jpg?k=5dedd14c3a1316de7aee81de6884b1731ebe8d73cccb9d8427ed8e90673d6923&o=&hp=1",
//           alt: "Exterior of The Hood Hostel",
//         },
//         interiorImage: {
//           url: "https://iar.ac.in/wp-content/uploads/2022/01/DSC_7211.jpg",
//           alt: "Interior of The Hood Hostel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '12000',
//         email: "bjohnson@example.com",
//         phone: "7392748900"
//       },
//       // Add more hostels if needed
//     ],
//   },
//   {
//     city: "Delhi",
//     hostels: [
//       {
//         name: "Bunk Hostel",
//         address: "22/1 Krishna Market, Main Bazar Rd, Paharganj, Delhi 110055",
//         exteriorImage: {
//           url: "https://images.adsttc.com/media/images/61ce/d107/336e/2852/f7e7/a7eb/newsletter/e-phx3019-fs.jpg?1640944006",
//           alt: "Exterior of Bunk Hostel",
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/Boys-Hostel2.jpg",
//           alt: "Interior of Bunk Hostel"
//         },
//         filter: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png",
//         rent: '9000',
//         email: "mwilson@example.com",
//         phone: "555-777-8888"
//       },
//       {
//         name: "Joey's Hostel ",
//         address: "Villa no.526, 17th D Main Rd, 6th Block, Connaught Place, Delhi, 560095",
//         exteriorImage: {
//           url: "https://sp-arc.net/wp-content/uploads/2022/04/Kota-house-30.jpg",
//           alt: "Exterior of Joey's Hostel"
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/hostel3.jpg",
//           alt: "Interior of Joey's Hostel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '8500',
//         email: "bthompson@example.com",
//         phone:  "555-444-3333"
//       },
//       {
//         name:  "Madpackers Hostel",
//         address: "395, 18th Main Rd, 6th Block, Koramangala, Nehru Place, Delhi, 560095",
//         exteriorImage: {
//           url: "https://images.trvl-media.com/lodging/15000000/14760000/14756300/14756202/9dded871.jpg?impolicy=resizecrop&rw=500&ra=fit",
//           alt: "Exterior of Madpackers Hostel",
//         },
//         interiorImage: {
//           url: "https://soaneemrana.org/____impro/1/onewebmedia/IMG_6505.JPG?etag=%2241319-55b3922e%22&sourceContentType=image%2Fjpeg&quality=85",
//           alt: "Interior of Madpackers Hostel"
//         },
//         filter: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4puxGbmnMq_RS-NtqwH8oN_Mnd3sEB3zMA&usqp=CAU",
//         rent: '8000',
//         email: "harrypeterh@example.com",
//         phone: "6323742746"
//       },
//       {
//         name: "Heistel ",
//         address: "63, 2A cross, 17th H Main Rd, KHB Colony, 5th Block, Saket, Delhi, 560095",
//         exteriorImage: {
//           url: "https://pix10.agoda.net/hotelImages/10291756/-1/f8c40e348087b10434115de7a889fe32.jpg?ca=9&ce=1&s=414x232&ar=16x9",
//           alt: "Exterior of Heistel",
//         },
//         interiorImage: {
//           url: "https://content.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-adyayiouqi.jpg",
//           alt: "Interior of Heistel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '10000',
//         email: "slee@example.com",
//         phone: "555-999-8888"
//       },
//       // Add more hostels if needed
//     ],
//   },
//   {
//     city: "Lucknow",
//     hostels: [
//       {
//         name: "Rana Youth Hostel",
//         address: "Near, Shaheed Nagar Shiv Temple Road, Babasaheb Bhim Rao Ambedkar University, Lucknow",
//         exteriorImage: {
//           url: "https://images.adsttc.com/media/images/61ce/d107/336e/2852/f7e7/a7eb/newsletter/e-phx3019-fs.jpg?1640944006",
//           alt: "Exterior of Rana Youth Hostel",
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/Boys-Hostel2.jpg",
//           alt: "Interior of Rana Youth Hostel"
//         },
//         filter: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png",
//         rent: '7500',
//         email: "adward123@example.com",
//         phone: "555-000-8888"
//       },
//       {
//         name: "Backpackers Den",
//         address: "Villa no.526, 17th D Main Rd, 6th Block, Gomti Nagar, Lucknow 560095",
//         exteriorImage: {
//           url: "https://sp-arc.net/wp-content/uploads/2022/04/Kota-house-30.jpg",
//           alt: "Exterior of Backpackers Den"
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/hostel3.jpg",
//           alt: "Interior of Backpackers Den"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '8500',
//         email: "adi2004@example.com",
//         phone:  "8786654536"
//       },
//       {
//         name:  "Hashtag traveler's Hotel",
//         address: "395, 18th Main Rd, 6th Block, Hazratgang, Lucknow, 560095",
//         exteriorImage: {
//           url: "https://images.trvl-media.com/lodging/15000000/14760000/14756300/14756202/9dded871.jpg?impolicy=resizecrop&rw=500&ra=fit",
//           alt: "Exterior of Hashtag traveler's Hotel",
//         },
//         interiorImage: {
//           url: "https://soaneemrana.org/____impro/1/onewebmedia/IMG_6505.JPG?etag=%2241319-55b3922e%22&sourceContentType=image%2Fjpeg&quality=85",
//           alt: "Interior of Hashtag traveler's Hotel"
//         },
//         filter: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4puxGbmnMq_RS-NtqwH8oN_Mnd3sEB3zMA&usqp=CAU",
//         rent: '10000',
//         email: "harrypeterh@example.com",
//         phone: "6323742746"
//       },
//       {
//         name: "Backpacker's Pad Hostel",
//         address: "63, 2A cross, 17th H Main Rd, KHB Colony, 5th Block, Indira Nagar, Lucknow, 560095",
//         exteriorImage: {
//           url: "https://pix10.agoda.net/hotelImages/10291756/-1/f8c40e348087b10434115de7a889fe32.jpg?ca=9&ce=1&s=414x232&ar=16x9",
//           alt: "Exterior of Backpacker's Pad Hostel",
//         },
//         interiorImage: {
//           url: "https://content.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-adyayiouqi.jpg",
//           alt: "Interior of Backpacker's Pad Hostel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '9000',
//         email: "slee@example.com",
//         phone: "9807000768"
//       },
//       // Add more hostels if needed
//     ],
//   },
//   {
//     city: "Mumbai",
//     hostels: [
//       {
//         name: "Forrest Hostels",
//         address: "6 no. market, opp. PWD Community Hall, near BKC, Government Colony, Bandra East, Mumbai, Maharashtra 400051",
//         exteriorImage: {
//           url: "https://images.adsttc.com/media/images/61ce/d107/336e/2852/f7e7/a7eb/newsletter/e-phx3019-fs.jpg?1640944006",
//           alt: "Exterior of Forrest Hostels",
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/Boys-Hostel2.jpg",
//           alt: "Interior of Forrest Hostels"
//         },
//         filter: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png",
//         rent: '9000',
//         email: "jgarcia@example.com",
//         phone: "555-222-1111"
//       },
//       {
//         name: "Hostel Mantra",
//         address: "Villa no.526, 17th D Main Rd, 6th Block, Worli, Mumbai, 560095",
//         exteriorImage: {
//           url: "https://sp-arc.net/wp-content/uploads/2022/04/Kota-house-30.jpg",
//           alt: "Exterior of Hostel Mantra"
//         },
//         interiorImage: {
//           url: "https://www.lbsim.ac.in/images/hostel3.jpg",
//           alt: "Interior of Hostel Mantra"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '11000',
//         email: "kjbhv@example.com",
//         phone:  "987-444-3333"
//       },
//       {
//         name:  "Nav Manor Hostels",
//         address: "18 137 Govt Housing Scheme, Nehru Rd, near Vakola, Police Station, Mumbai, Maharashtra 400055",
//         exteriorImage: {
//           url: "https://images.trvl-media.com/lodging/15000000/14760000/14756300/14756202/9dded871.jpg?impolicy=resizecrop&rw=500&ra=fit",
//           alt: "Exterior of Nav Manor Hostel",
//         },
//         interiorImage: {
//           url: "https://soaneemrana.org/____impro/1/onewebmedia/IMG_6505.JPG?etag=%2241319-55b3922e%22&sourceContentType=image%2Fjpeg&quality=85",
//           alt: "Interior of Nav Manor Hostel"
//         },
//         filter: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4puxGbmnMq_RS-NtqwH8oN_Mnd3sEB3zMA&usqp=CAU",
//         rent: '9500',
//         email: "dkajdb@example.com",
//         phone: "111-222-1111"
//       },
//       {
//         name: "Locomo Hostel",
//         address: "2nd Flr, Krishna Villa, abv Bank Of Maharashtra, Monghibai Rd, Vile Parle East, Mumbai, Maharashtra 400057",
//         exteriorImage: {
//           url: "https://pix10.agoda.net/hotelImages/10291756/-1/f8c40e348087b10434115de7a889fe32.jpg?ca=9&ce=1&s=414x232&ar=16x9",
//           alt: "Exterior of Locomo Hostel",
//         },
//         interiorImage: {
//           url: "https://content.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-adyayiouqi.jpg",
//           alt: "Interior of Locomo Hostel"
//         },
//         filter: "https://cdn-icons-png.flaticon.com/512/103/103277.png",
//         rent: '10000',
//         email: "ganman@example.com",
//         phone: "333-222-1111"
//       },
//       // Add more hostels if needed
//     ],
//   },
//   // Add more cities if needed
// ];

// productModel.create(sampleData)
//   .then((insertedData) => {
//     console.log('Data inserted successfully:', insertedData);
//   })
//   .catch((error) => {
//     console.error('Error inserting data:', error);
//   });

module.exports=productModel;