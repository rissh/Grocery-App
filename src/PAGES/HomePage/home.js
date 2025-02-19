import React from "react";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import ProductSidebar from "../../COMPONENTS/Product/ProductSidebar";
//

import prod1A from "../../ASSETS/Products/1A.png";
import prod1B from "../../ASSETS/Products/1B.png";
import prod1C from "../../ASSETS/Products/1C.png";
import prod2A from "../../ASSETS/Products/2A.png";
import prod2B from "../../ASSETS/Products/2B.png";
import prod2C from "../../ASSETS/Products/2C.png";
import prod3A from "../../ASSETS/Products/3A.png";
import prod3B from "../../ASSETS/Products/3B.png";
import prod3C from "../../ASSETS/Products/3C.png";
import prod4A from "../../ASSETS/Products/4A.png";
import prod4B from "../../ASSETS/Products/4B.png";
import prod4C from "../../ASSETS/Products/4C.png";
import prod5A from "../../ASSETS/Products/5A.png";
import prod5B from "../../ASSETS/Products/5B.png";
import prod5C from "../../ASSETS/Products/5C.png";
import prod6A from "../../ASSETS/Products/6A.png";
import prod6B from "../../ASSETS/Products/6B.png";
import prod6C from "../../ASSETS/Products/6C.png";
import prod7A from "../../ASSETS/Products/7A.png";
import prod7B from "../../ASSETS/Products/7B.png";
import prod7C from "../../ASSETS/Products/7C.png";
import prod8A from "../../ASSETS/Products/8A.png";
import prod8B from "../../ASSETS/Products/8B.png";
import prod8C from "../../ASSETS/Products/8C.png";
import prod9A from "../../ASSETS/Products/9A.png";
import prod9B from "../../ASSETS/Products/9B.png";
import prod9C from "../../ASSETS/Products/9C.png";
import prod10A from "../../ASSETS/Products/10A.png";
import prod10B from "../../ASSETS/Products/10B.png";
import prod10C from "../../ASSETS/Products/10C.png";
import prod11A from "../../ASSETS/Products/11A.png";
import prod11B from "../../ASSETS/Products/11B.png";
import prod11C from "../../ASSETS/Products/11C.png";
import prod12A from "../../ASSETS/Products/12A.png";
import prod12B from "../../ASSETS/Products/12B.png";
import prod12C from "../../ASSETS/Products/12C.png";
import prod13A from "../../ASSETS/Products/13A.png";
import prod13B from "../../ASSETS/Products/13B.png";
import prod13C from "../../ASSETS/Products/13C.png";
import prod14A from "../../ASSETS/Products/14A.png";
import prod14B from "../../ASSETS/Products/14B.png";
import prod14C from "../../ASSETS/Products/14C.png";
import prod15A from "../../ASSETS/Products/15A.png";
import prod15B from "../../ASSETS/Products/15B.png";
import prod15C from "../../ASSETS/Products/15C.png";
import prod16A from "../../ASSETS/Products/16A.png";
import prod16B from "../../ASSETS/Products/16B.png";
import prod16C from "../../ASSETS/Products/16C.png";

//
import ProductSlider from "../../COMPONENTS/Product/ProductSlider";

const home = () => {
  const products = [
    {
      ProductId: 1,
      ProductName: "Bell Peppers",
      ProductDescription:
        "Bell peppers, also known as sweet peppers or capsicum, are a type of vegetable that come in various colors such as green, red, and yellow. They are commonly used in cooking and are known for their crunchy texture and sweet taste.",
      ProductImage: [
        {
          id: 1,
          image: prod1B,
        },
        {
          id: 2,
          image: prod1A,
        },
        {
          id: 3,
          image: prod1C,
        },
      ],
      ProductCode: "BP1",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Fresh Produce",
      ProductBrand: "Organic Farms",
      ProductColor: "Green, Red, Yellow",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "N/A",
      ProductQuantity: 20,
      ProductUnit: "Packet",
      ProductPrice: 50,
      SalesPrice: 40,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription: "Returns accepted",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Riya Sharma",
          Email: "",
          Rating: 4,
          Date: "2022-04-15",
          Review:
            "I really enjoyed these bell peppers! They were fresh and tasted great in my stir-fry. Would buy again.",
        },
        {
          ReviewId: 2,
          Name: "Rahul Gupta",
          Email: "",
          Rating: 3,
          Date: "2022-04-10",
          Review:
            "The bell peppers were good, but I found a few that were starting to go bad. Overall decent quality.",
        },
        {
          ReviewId: 3,
          Name: "Amit Singh",
          Email: "",
          Rating: 5,
          Date: "2022-04-05",
          Review:
            "These bell peppers were amazing! They were fresh and tasted great in my salad. Highly recommend!",
        },
      ],
    },
    {
      ProductId: 2,
      ProductName: "Broccoli",
      ProductDescription:
        "Broccoli is a green vegetable that is high in nutrients and low in calories. It is a great source of vitamins C and K, fiber, and antioxidants.",
      ProductImage: [
        {
          id: 1,
          image: prod2A,
        },
        {
          id: 2,
          image: prod2B,
        },
        {
          id: 3,
          image: prod2C,
        },
      ],
      ProductCode: "BRO-001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Cruciferous Vegetables",
      ProductBrand: "Fresh Produce",
      ProductColor: "Green",
      ProductSize: "Medium",
      ProductWeight: "500 g",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "pieces",
      ProductPrice: 2.99,
      SalesPrice: 2.49,
      ProductDiscount: 17,
      ProductDiscountType: "Percentage",
      ProductTax: 0,
      ProductTaxType: "None",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "None",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Anywhere",
      ProductShippingLocationType: "Worldwide",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Details",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Smith",
          Email: "john.smith@example.com",
          Rating: 5,
          Date: "2023-04-30",
          Review:
            "I love broccoli! This is some of the freshest and most delicious broccoli I've ever tasted.",
        },
        {
          ReviewId: 2,
          Name: "Jane Doe",
          Email: "jane.doe@example.com",
          Rating: 4,
          Date: "2023-05-01",
          Review:
            "The broccoli was good, but not as fresh as I was hoping for. Still, it tasted great and I would definitely buy it again.",
        },
        {
          ReviewId: 3,
          Name: "Bob Johnson",
          Email: "bob.johnson@example.com",
          Rating: 3,
          Date: "2023-05-02",
          Review:
            "I was disappointed with the size of the broccoli pieces. They were much smaller than I expected.",
        },
      ],
    },
    {
      ProductId: 3,
      ProductName: "Cabbage",
      ProductDescription:
        "This fresh green cabbage is perfect for making salads, coleslaw, and other delicious dishes. It is grown locally without the use of pesticides and is hand-picked for maximum freshness.",
      ProductImage: [
        {
          id: 1,
          image: prod3A,
        },
        {
          id: 2,
          image: prod3B,
        },
        {
          id: 3,
          image: prod3C,
        },
      ],
      ProductCode: "CABB01",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Leafy Vegetables",
      ProductBrand: "Green Farm",
      ProductColor: "Green",
      ProductSize: "Medium",
      ProductWeight: "1 kg",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "Piece",
      ProductPrice: 2.5,
      SalesPrice: 2,
      ProductDiscount: 0.5,
      ProductDiscountType: "Currency",
      ProductTax: 0.2,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "Currency",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "US",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day money-back guarantee",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not satisfied with your purchase, we will provide a full refund within 30 days.",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@gmail.com",
          Rating: 4,
          Date: "2022-04-15",
          Review:
            "This cabbage is really fresh and tasty. I used it to make a salad and it was delicious!",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@hotmail.com",
          Rating: 5,
          Date: "2022-05-01",
          Review:
            "I love this cabbage! It's always fresh and crisp, and it makes a great addition to any meal.",
        },
        {
          ReviewId: 3,
          Name: "David Lee",
          Email: "davidlee@yahoo.com",
          Rating: 3,
          Date: "2022-05-07",
          Review:
            "The cabbage was okay, but I've had better. It was a little wilted when it arrived and didn't last as long as I expected.",
        },
      ],
    },
    {
      ProductId: 4,
      ProductName: "Brinjal",
      ProductDescription:
        "Fresh and healthy brinjals handpicked from the farm. Our brinjals are of premium quality and are perfect for all your cooking needs.",
      ProductImage: [
        {
          id: 1,
          image: prod4A,
        },
        {
          id: 2,
          image: prod4B,
        },
        {
          id: 3,
          image: prod4C,
        },
      ],
      ProductCode: "BRN01",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Solanaceous Vegetables",
      ProductBrand: "Farm Fresh",
      ProductColor: "Purple",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "",
      ProductQuantity: 20,
      ProductUnit: "kg",
      ProductPrice: 50,
      SalesPrice: 45,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 15,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy returns within 15 days of delivery",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "In case you are not satisfied with the product, you can initiate a return and get a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Details",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-05-01",
          Review:
            "The brinjals were fresh and of good quality. They were perfect for the recipe I was making. I would definitely recommend this product to others.",
        },
        {
          ReviewId: 2,
          Name: "Jane Doe",
          Email: "janedoe@example.com",
          Rating: 5,
          Date: "2022-05-10",
          Review:
            "I have been ordering brinjals from this seller for a while now, and I have always been satisfied with the quality of the product. The brinjals are fresh and tasty, and they are perfect for all my cooking needs.",
        },
      ],
    },
    {
      ProductId: 5,
      ProductName: "Chillies",
      ProductDescription:
        "Chillies are the fruit of plants from the genus Capsicum, which are members of the nightshade family. They are widely used in cooking to add heat and flavor to dishes.",
      ProductImage: [
        {
          id: 1,
          image: prod5A,
        },
        {
          id: 2,
          image: prod5B,
        },
        {
          id: 3,
          image: prod5C,
        },
      ],
      ProductCode: "C5",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Chillies",
      ProductBrand: "Brand 5",
      ProductColor: "Green, Red, Yellow",
      ProductSize: "Varies",
      ProductWeight: "Varies",
      ProductMaterial: "N/A",
      ProductQuantity: 50,
      ProductUnit: "kg",
      ProductPrice: 10,
      SalesPrice: 8,
      ProductDiscount: 20,
      ProductDiscountType: "Percentage",
      ProductTax: 10,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 5,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "1-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Worldwide",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not satisfied with your purchase, you may return it within 30 days for a refund.",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-01-01",
          Review:
            "These chillies are great! They add just the right amount of heat to my dishes.",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@example.com",
          Rating: 5,
          Date: "2022-02-01",
          Review: "I love these chillies! They are so fresh and flavorful.",
        },
        {
          ReviewId: 3,
          Name: "Bob Johnson",
          Email: "bobjohnson@example.com",
          Rating: 3,
          Date: "2022-03-01",
          Review:
            "These chillies were okay. I've had better, but they did the job.",
        },
      ],
    },
    {
      ProductId: 6,
      ProductName: "Garlic",
      ProductDescription:
        "Garlic is a plant in the onion family that is used as a seasoning in food. It has a strong, pungent flavor and aroma. Garlic is believed to have many health benefits, including boosting the immune system and reducing the risk of certain types of cancer.",
      ProductImage: [
        {
          id: 1,
          image: prod6A,
        },
        {
          id: 2,
          image: prod6B,
        },
        {
          id: 3,
          image: prod6C,
        },
      ],
      ProductCode: "GRLC001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Allium",
      ProductBrand: "Fresh Harvest",
      ProductColor: "White",
      ProductSize: "Medium",
      ProductWeight: "500 g",
      ProductMaterial: "",
      ProductQuantity: 100,
      ProductUnit: "g",
      ProductPrice: 2.99,
      SalesPrice: 2.5,
      ProductDiscount: 0,
      ProductDiscountType: "Percentage",
      ProductTax: 0.15,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 5,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "2-3 business days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "United States",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John",
          Email: "john@example.com",
          Rating: 5,
          Date: "2022-01-01",
          Review: "Great quality garlic. Highly recommended.",
        },
        {
          ReviewId: 2,
          Name: "Jane",
          Email: "jane@example.com",
          Rating: 4,
          Date: "2022-01-05",
          Review:
            "The garlic was fresh and flavorful, but some of the cloves were quite small.",
        },
        {
          ReviewId: 3,
          Name: "Bob",
          Email: "bob@example.com",
          Rating: 3,
          Date: "2022-01-10",
          Review:
            "Decent garlic, but a bit overpriced compared to what I can get at my local grocery store.",
        },
      ],
    },
    {
      ProductId: 7,
      ProductName: "Carrot",
      ProductDescription:
        "Carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow varieties also exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is the taproot, although the greens are sometimes eaten as well.",
      ProductImage: [
        {
          id: 1,
          image: prod7A,
        },
        {
          id: 2,
          image: prod7B,
        },
        {
          id: 3,
          image: prod7C,
        },
      ],
      ProductCode: "CRT1",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Root Vegetables",
      ProductBrand: "Farm Fresh",
      ProductColor: "Orange",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "Vegetable",
      ProductQuantity: 20,
      ProductUnit: "Kg",
      ProductPrice: 40,
      SalesPrice: 35,
      ProductDiscount: 5,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30 days",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return the product in its original condition within 30 days of delivery for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Jane Doe",
          Email: "jane@example.com",
          Rating: 4,
          Date: "2022-05-01",
          Review: "I ordered these carrots and they were fresh and tasty!",
        },
        {
          ReviewId: 2,
          Name: "John Smith",
          Email: "john@example.com",
          Rating: 5,
          Date: "2022-05-03",
          Review:
            "I'm very happy with my purchase of these carrots. They were delivered quickly and were of excellent quality.",
        },
      ],
    },
    {
      ProductId: 8,
      ProductName: "Radish",
      ProductDescription:
        "Radish is a root vegetable that is crispy, crunchy, and slightly sweet. It is rich in vitamins and minerals, and is a good source of fiber.",
      ProductImage: [
        {
          id: 1,
          image: prod8A,
        },
        {
          id: 2,
          image: prod8B,
        },
        {
          id: 3,
          image: prod8C,
        },
      ],
      ProductCode: "RDSH-001",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Root Vegetables",
      ProductBrand: "Fresh Farms",
      ProductColor: "Red",
      ProductSize: "Small",
      ProductWeight: "100g",
      ProductMaterial: "N/A",
      ProductQuantity: 50,
      ProductUnit: "Bunch",
      ProductPrice: 3.0,
      SalesPrice: 1.5,
      ProductDiscount: 50,
      ProductDiscountType: "Amount",
      ProductTax: 0.1,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 0,
      ProductShippingChargeType: "Amount",
      ProductShippingTime: "1-2 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "Domestic",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it for a full refund.",
      ProductShippingReturnPolicyDescriptionType: "Text",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-04-01",
          Review: "I really enjoyed the radishes! They were fresh and tasty.",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@example.com",
          Rating: 3,
          Date: "2022-04-15",
          Review:
            "The radishes were okay, but they weren't as fresh as I was hoping.",
        },
      ],
    },
    {
      ProductId: 9,
      ProductName: "Cucumber",
      ProductDescription:
        "Cucumbers are a type of fruit that belong to the gourd family. They are usually eaten raw, either whole or sliced, and are commonly used in salads and sandwiches.",
      ProductImage: [
        {
          id: 1,
          image: prod9A,
        },
        {
          id: 2,
          image: prod9B,
        },
        {
          id: 3,
          image: prod9C,
        },
      ],
      ProductCode: "CU9",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Cucumbers",
      ProductBrand: "Fresh Farms",
      ProductColor: "",
      ProductSize: "Medium",
      ProductWeight: "1 lb",
      ProductMaterial: "",
      ProductQuantity: 20,
      ProductUnit: "lb",
      ProductPrice: 2.99,
      SalesPrice: 2.49,
      ProductDiscount: 0,
      ProductDiscountType: "Fixed",
      ProductTax: 0,
      ProductTaxType: "No Tax",
      ProductShippingCharge: 5.99,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Business Days",
      ProductShippingLocation: "United States",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "30-day return policy",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "If you are not satisfied with your purchase, you can return it for a full refund within 30 days.",
      ProductShippingReturnPolicyDescriptionType: "Description",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "John Doe",
          Email: "johndoe@example.com",
          Rating: 4,
          Date: "2022-03-01",
          Review:
            "These cucumbers are fresh and crisp. They're perfect for making salads!",
        },
        {
          ReviewId: 2,
          Name: "Jane Smith",
          Email: "janesmith@example.com",
          Rating: 5,
          Date: "2022-04-15",
          Review:
            "I love these cucumbers! They're great for snacking on and adding to sandwiches.",
        },
        {
          ReviewId: 3,
          Name: "Bob Johnson",
          Email: "bobjohnson@example.com",
          Rating: 3,
          Date: "2022-05-01",
          Review:
            "These cucumbers are okay, but they're a little too bitter for my taste.",
        },
      ],
    },
    {
      ProductId: 10,
      ProductName: "Potatoes",
      ProductDescription:
        "Potatoes are a starchy root vegetable widely used in Indian cuisine. They are rich in nutrients such as potassium and vitamin C, and can be prepared in a variety of ways, from mashed potatoes to french fries.",
      ProductImage: [
        {
          id: 1,
          image: prod10A,
        },
        {
          id: 2,
          image: prod10B,
        },
        {
          id: 3,
          image: prod10C,
        },
      ],
      ProductCode: "P10",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Root Vegetables",
      ProductBrand: "Fresh Farms",
      ProductColor: "",
      ProductSize: "",
      ProductWeight: "1 kg",
      ProductMaterial: "",
      ProductQuantity: 20,
      ProductUnit: "kg",
      ProductPrice: 30,
      SalesPrice: 25,
      ProductDiscount: 5,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "3-5 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription: "Return within 7 days",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Rahul Gupta",
          Email: "rahul.gupta@example.com",
          Rating: 5,
          Date: "2022-04-01",
          Review:
            "The potatoes were fresh and of good quality. I used them to make aloo gobi and the dish turned out great.",
        },
        {
          ReviewId: 2,
          Name: "Priya Singh",
          Email: "priya.singh@example.com",
          Rating: 4,
          Date: "2022-04-05",
          Review:
            "The potatoes were slightly on the smaller side, but overall they were good. I made mashed potatoes with them and they were creamy and delicious.",
        },
        {
          ReviewId: 3,
          Name: "Amit Patel",
          Email: "amit.patel@example.com",
          Rating: 3,
          Date: "2022-04-10",
          Review:
            "The potatoes were okay, but I expected them to be larger. They were still usable for making potato curry.",
        },
      ],
    },
    {
      ProductId: 11,
      ProductName: "Tomato",
      ProductDescription:
        "Tomato is a juicy, nutritious fruit commonly eaten as a vegetable, is another wonderful gift of the Mayans to the world. This humble vegetable of Central America has seized the attention of millions of health seekers for its incredible nutritional properties. Interestingly, it has more health-benefiting compounds than that of some popular fruits like apple!",
      ProductImage: [
        {
          id: 1,
          image: prod11A,
        },
        {
          id: 2,
          image: prod11B,
        },
        {
          id: 3,
          image: prod11C,
        },
      ],
      ProductCode: "TOM",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Tomatoes",
      ProductBrand: "Local Farms",
      ProductColor: "Red",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "Natural",
      ProductQuantity: 100,
      ProductUnit: "kg",
      ProductPrice: 25,
      SalesPrice: 20,
      ProductDiscount: 5,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Business Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy return within 7 days of delivery",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription: "100% refund on returns",
      ProductShippingReturnPolicyDescriptionType: "Policy",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Sneha Sharma",
          Email: "sneha@example.com",
          Rating: 4,
          Date: "2022-04-23",
          Review:
            "I have been buying these tomatoes for a while now, and they have always been fresh and juicy. Highly recommended.",
        },
        {
          ReviewId: 2,
          Name: "Rahul Kumar",
          Email: "rahul@example.com",
          Rating: 5,
          Date: "2022-03-17",
          Review:
            "The best tomatoes I have ever tasted. So fresh and flavorful!",
        },
        {
          ReviewId: 3,
          Name: "Anjali Singh",
          Email: "anjali@example.com",
          Rating: 3,
          Date: "2022-01-05",
          Review: "Decent quality tomatoes, but a bit on the expensive side.",
        },
      ],
    },
    {
      ProductId: 12,
      ProductName: "Pumpkin",
      ProductDescription:
        "Pumpkin is a nutrient-dense food that is low in calories but high in vitamins and minerals. It is a great source of fiber, potassium, and vitamin C. Pumpkins are also rich in antioxidants that can help protect your body against damage caused by free radicals.",
      ProductImage: [
        {
          id: 1,
          image: prod12B,
        },
        {
          id: 2,
          image: prod12A,
        },
        {
          id: 3,
          image: prod12C,
        },
      ],
      ProductCode: "P15",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Gourds",
      ProductBrand: "Farm Fresh",
      ProductColor: "Orange",
      ProductSize: "Large",
      ProductWeight: "1 kg",
      ProductMaterial: "Natural",
      ProductQuantity: 50,
      ProductUnit: "Piece",
      ProductPrice: 40,
      SalesPrice: 30,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return within 7 days of delivery",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Rajesh",
          Email: "rajesh@example.com",
          Rating: 4,
          Date: "2022-03-15",
          Review: "Fresh and delicious pumpkins. Will definitely order again.",
        },
        {
          ReviewId: 2,
          Name: "Suman",
          Email: "suman@example.com",
          Rating: 5,
          Date: "2022-02-25",
          Review: "Great quality and taste. Highly recommended!",
        },
        {
          ReviewId: 3,
          Name: "Amit",
          Email: "amit@example.com",
          Rating: 3,
          Date: "2022-02-10",
          Review: "Decent pumpkins, but a bit expensive.",
        },
      ],
    },
    {
      ProductId: 13,
      ProductName: "Onion",
      ProductDescription:
        "Onion is a vegetable that belongs to the Allium genus of flowering plants, which also includes garlic and chives. It is rich in nutrients and has been used for centuries for its medicinal properties.",
      ProductImage: [
        {
          id: 1,
          image: prod13B,
        },
        {
          id: 2,
          image: prod13B,
        },
        {
          id: 3,
          image: prod13C,
        },
      ],
      ProductCode: "ONI",
      ProductCategory: "Vegetables",
      ProductSubCategory: "Bulbs",
      ProductBrand: "Fresh Farms",
      ProductColor: "Brown",
      ProductSize: "Medium",
      ProductWeight: "500g",
      ProductMaterial: "",
      ProductQuantity: 20,
      ProductUnit: "kg",
      ProductPrice: 50,
      SalesPrice: 45,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 10,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All over India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return within 7 days of receipt of the product",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Rahul Gupta",
          Email: "rahul@example.com",
          Rating: 4,
          Date: "2022-01-15",
          Review: "Good quality onions, worth the price.",
        },
        {
          ReviewId: 2,
          Name: "Anjali Sharma",
          Email: "anjali@example.com",
          Rating: 5,
          Date: "2022-01-22",
          Review: "Fresh and tasty onions, very happy with the purchase.",
        },
        {
          ReviewId: 3,
          Name: "Saurabh Singh",
          Email: "saurabh@example.com",
          Rating: 3,
          Date: "2022-02-01",
          Review: "Average quality onions, not very fresh.",
        },
      ],
    },
    {
      ProductId: 14,
      ProductName: "Apples",
      ProductDescription:
        "Apples are a type of fruit that come in many different colors and varieties. They are a great source of vitamins and nutrients and are often enjoyed as a healthy snack.",
      ProductImage: [
        {
          id: 1,
          image: prod14A,
        },
        {
          id: 2,
          image: prod14B,
        },
        {
          id: 3,
          image: prod14C,
        },
      ],
      ProductCode: "APP",
      ProductCategory: "Fruits",
      ProductSubCategory: "Pome fruits",
      ProductBrand: "Fresh Farms",
      ProductColor: "Red",
      ProductSize: "Large",
      ProductWeight: "1kg",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "kg",
      ProductPrice: 120,
      SalesPrice: 100,
      ProductDiscount: 17,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 20,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "3-4 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All over India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return within 10 days of receipt of the product",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Priya Kumari",
          Email: "priya@example.com",
          Rating: 5,
          Date: "2022-03-15",
          Review: "Really tasty apples, very satisfied with the purchase.",
        },
        {
          ReviewId: 2,
          Name: "Rakesh Singh",
          Email: "rakesh@example.com",
          Rating: 4,
          Date: "2022-03-22",
          Review: "Good quality apples, worth the price.",
        },
        {
          ReviewId: 3,
          Name: "Amit Gupta",
          Email: "amit@example.com",
          Rating: 3,
          Date: "2022-04-01",
          Review: "Not as fresh as I expected, but still decent quality.",
        },
      ],
    },
    {
      ProductId: 15,
      ProductName: "Banana",
      ProductDescription:
        "Bananas are a popular fruit that are high in fiber, potassium, and vitamins. They are enjoyed raw, cooked, or in various desserts.",
      ProductImage: [
        {
          id: 1,
          image: prod15A,
        },
        {
          id: 2,
          image: prod15B,
        },
        {
          id: 3,
          image: prod15C,
        },
      ],
      ProductCode: "BAN",
      ProductCategory: "Fruits",
      ProductSubCategory: "Tropical Fruits",
      ProductBrand: "Organic Farms",
      ProductColor: "Yellow",
      ProductSize: "Medium",
      ProductWeight: "1 kg",
      ProductMaterial: "",
      ProductQuantity: 50,
      ProductUnit: "pieces",
      ProductPrice: 100,
      SalesPrice: 90,
      ProductDiscount: 10,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 15,
      ProductShippingChargeType: "Percentage",
      ProductShippingTime: "3-4 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All over India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return within 7 days of receipt of the product",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Amit Patel",
          Email: "amit@example.com",
          Rating: 5,
          Date: "2022-05-10",
          Review: "Great quality bananas, fresh and delicious.",
        },
        {
          ReviewId: 2,
          Name: "Priya Singh",
          Email: "priya@example.com",
          Rating: 4,
          Date: "2022-05-12",
          Review: "Good quality bananas, but some were slightly overripe.",
        },
        {
          ReviewId: 3,
          Name: "Rajesh Kumar",
          Email: "rajesh@example.com",
          Rating: 3,
          Date: "2022-05-15",
          Review: "Average quality bananas, some were bruised.",
        },
      ],
    },
    {
      ProductId: 16,
      ProductName: "Watermelon",
      ProductDescription:
        "Watermelon is a refreshing summer fruit that is rich in vitamins and minerals. It has a sweet, juicy flesh and a tough outer rind.",
      ProductImage: [
        {
          id: 1,
          image: prod16A,
        },
        {
          id: 2,
          image: prod16B,
        },
        {
          id: 2,
          image: prod16C,
        },
      ],
      ProductCode: "WAT",
      ProductCategory: "Fruits",
      ProductSubCategory: "Melons",
      ProductBrand: "Fresh Farms",
      ProductColor: "Green",
      ProductSize: "Large",
      ProductWeight: "5kg",
      ProductMaterial: "",
      ProductQuantity: 10,
      ProductUnit: "piece",
      ProductPrice: 80,
      SalesPrice: 70,
      ProductDiscount: 12.5,
      ProductDiscountType: "Percentage",
      ProductTax: 5,
      ProductTaxType: "Percentage",
      ProductShippingCharge: 15,
      ProductShippingChargeType: "Fixed",
      ProductShippingTime: "2-3 days",
      ProductShippingTimeType: "Days",
      ProductShippingLocation: "All over India",
      ProductShippingLocationType: "Country",
      ProductShippingReturnPolicy: "Easy Returns",
      ProductShippingReturnPolicyType: "Days",
      ProductShippingReturnPolicyDescription:
        "Return within 7 days of receipt of the product",
      ProductShippingReturnPolicyDescriptionType: "Days",
      ProductReviews: [
        {
          ReviewId: 1,
          Name: "Shreya Patel",
          Email: "shreya@example.com",
          Rating: 5,
          Date: "2022-06-01",
          Review: "Fresh and delicious watermelon, would definitely recommend.",
        },
        {
          ReviewId: 2,
          Name: "Rahul Sharma",
          Email: "rahul@example.com",
          Rating: 4,
          Date: "2022-06-10",
          Review: "Good quality watermelon, but slightly expensive.",
        },
        {
          ReviewId: 3,
          Name: "Neha Gupta",
          Email: "neha@example.com",
          Rating: 3,
          Date: "2022-06-20",
          Review: "Average quality watermelon, not very sweet.",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="Related Products" />
      </div>

      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="More Products" />
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default home;
