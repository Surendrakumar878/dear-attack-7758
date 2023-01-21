import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      h="2000px"
      mt="30px"
      background="#101010"
      pt="30px"
      fontFamily="ProximaNova,Helvetica,Arial"
      fontSize="14px"
      display={{base:"none",md:"block"}}
    >
      <Box
        display="flex"
        
        h="500px"
        pl="50px"
        pr="30px"
      >
        <Box w="32%" pl="100px" pt="30px" borderBottom="1px dotted #FFFFFF">
          <Box color="white" lineHeight="30px">
            <Text>Bigbasket</Text>
            <Text>About Us</Text>
            <Text>In News</Text>
            <Text>Green bigbasket</Text>
            <Text>Privacy Policy</Text>
            <Text>Affiliate </Text>
            <Text>Terms and Conditions</Text>
            <Text>Careers At bigbasket</Text>
            <Text>bb Instant</Text>
            <Text>bb Daily</Text>
            <Text>bb Blog</Text>
            <Text>bbnow</Text>
          </Box>
        </Box>
        <Box w="32%" pt="30px" pl="100px" borderBottom="1px dotted #FFFFFF">
          <Box color="white" textAlign="left">
            <Text>Help</Text>
            <Text>FAQs</Text>
            <Text>Contact Us</Text>
            <Text>bb Wallet FAQs</Text>
            <Text>bb Wallet T&Cs</Text>
            <Text>Vendor Connect</Text>
          </Box>
        </Box>
        <Box w="32%" pl="100px" borderBottom="1px dotted #FFFFFF">
          <Image src="https://i.ibb.co/gM7mb15/imageedit-2-2956265302.png" h="100px" w="200px" borderRadius="20px" mb="20px"  />
          <Box display="flex" gap="30px">
            <a href="https://www.facebook.com/Bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a>
            <a href="https://www.instagram.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a>
            <a href="https://twitter.com/Bigbasket_com"><Image
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a>
            <a href="https://in.pinterest.com/bigbasketcom/"><Image
              src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
              alt="insta"
              w="30px"
              h="30px"
            /></a>
          </Box>
          <Text color="white" mt="20px" mb="10px">Vendor Connect</Text>
          <Button h="25px" background="black" _hover={{background:"#FFFFFF",color:'black'}} color="white" >Become seller</Button>
        </Box>
      </Box>
      <Box pl="200px" pr="100px" lineHeight="30px" borderBottom="1px dotted white">
        <Text
          textAlign="center"
          color="white"
          fontSize="20px"
          fontWeight="bold"
        >
          Cities we can serve
        </Text>
        <Text color="white" >
          Dhamnod | Medinipur | Modasa | Gopalganj | Nainital | Pakyong |
          Shilong | Tawang | Paschim Bardhaman | PEDDAPALLI | Amreli |
          Narsinghpur | Howrah | Badnagar | Deesa | Kozhikode | Warangal |
          Hanamkonda | Pratapgarh District | Prakasam District | Kannauj |
          Farrukhabad | Ludhiana District | Chhibramau | Gonda District |
          Khargone | Baghpat District | Amroha District | Mahabubnagar | Korba |
          Varanasi | Kanakapura | Khurai | Raisen | Gondia | Rahatgarh | Bhiwadi
          | Goa | Bahadurgarh | Raichur | Sindudurg | Sangareddy | Kurnool |
          Jadcherla | Rupnagar | Faridkot | Shamli | Pench | Visakhapatnam
          District | Ujjain | Sikar | Nadia | Bardoli | Saran | Thrissur |
          Chittor District | Shambhu | North 24 Parganas | Khambhat | Hubli |
          Prakasam | Nalgonda | Karnal | Panipat | Rohtak | Renigunta | Patiala
          | Trichy | Ramnagar | Bulandshahr | Nagarkurnool | Gadwal |
          Jahangirabad | Anupshahar | Gudur | Khatauli | Shahabad Markanda |
          Bhagpat | Srinagar | Shimla | Lakhisarai | Berachampa | Andaman and
          Nicobar | Bilimora | Hasnabad | Surat | Muzaffarnagar District |
          Mysore | Bihta | Bhubaneswar Rural | Hyderabad | Kolkata | Chennai |
          Mumbai | Nashik | Bidhuna | Warud | Chandur Bazar | Kapurthala |
          Hooghly District | Kalluru | Kalmeshwar | Morshi | Puttur | Khandwa |
          Bhandara | Ganj Basoda | Bhavnagar | Dhenkanal | Srikalahasti |
          Fatehgarh Sahib District | Lakhimpur | Bangarmau | Palani | Songadh |
          Pehowa | Vyara | Dholka | Kheda | Ukhra | Udaipura | Gadarwara | Jaora
          | Nagda | Ratlam | Nadiad | Palanpur | Bhopal | Jaipur |
          Ahmedabad-Gandhinagar | Noida-Ghaziabad | Meerut | Vizianagaram |
          Medak District | East Godavari District | Nizamabad District |
          Kamareddy District | Lucknow Rural | Noida Rural | Chennai Rural |
          Tirupattur | Hyderabad Rural | Bangalore Rural | Ladakh | Sonipat |
          Kundli | Bagepalli | Chintamani | Ambur | Channapatna | Maddur |
          Nabadwip | Katwa | Kharagpur | Tarakeswar | Kothagudem | Ramanagara |
          Rampur | Valsad | Samastipur | Jabalpur | Wanaparthy | Bolpur |
          Balasore | Kendrapara | Sausar | Haridwar | Suryapet District |
          Bhadrak District | Konaseema District | Raebareli District | West
          Godavari District | Vikarabad | Haldia | Kanthi | Dahegam | Cuttack |
          Jangaon | Dindigul | Sihor | Dudu | Jagatsinghpur | Udumalaipettai |
          Pollachi | Vijapur | Dharapuram | Canning | Tiptur | Mehmedabad |
          Fatehpur | Krishnarajpet | Fatehgarh | Srirangapatna | Arsikere |
          Karur | Gobichettipalayam | Seoni | Daryapur Banosa | Chaklasi |
          Thanesar | Muzaffarpur | Punjab | Barabanki District | Jalandhar |
          Indore | Mhow | Pithampur | Ludhiana | Hapur | Chandigarh Tricity |
          East-Godavari-2 | Chittoor District | Tiruvallur District | Bidar
          District | Sangareddy District | Ayodhya District | Guwahati Rural |
          Channarayapattana | Saoner | Madanapalli | Tirupati | Memari |
          Miryalaguda | Kalwakurthy | Coimbatore Rural | Hajipur | Kadapa |
          Bangaon | Habra | Tamluk | Basirhat | Barakar | Chittaranjan | Gohana
          | Bhadrak | Nagpur | Kochi | Tripura | Puri | Sathupally | Haryana |
          Sanawad | Akola | Katol | Lunawada | Godhra | Purba Bardhaman |
          Karimnagar | Mathura | Hathras | Nagpur Rural | Patna Rural | Mumbai
          Rural | Mysore Rural | Vadodara Rural | Jaipur Rural | Khergam |
          Masrakh | Bakhtiarpur | Hassan | Arambag | Baripada | Soro | Shadnagar
          | Bhongir | Kazipet | Kishangarh | Nasirabad | Jammu Kashmir | Katihar
          | Ramtek | Moradabad | Shahjahanpur | Ajmer | Kottayam |
          Rajamahendravaram | Kakinada | Nabha | Sahibganj | Gudiyatham |
          DehraDun | Saharanpur District | Aligarh | Pune Rural | Sircilla
          District | Vizag Rural | South 24 Parganas District | Mulbagal |
          Pipariya | Sultanpur District | kolar | Amravati | Jamshedpur |
          Kolhapur | Kalaburagi | Guwahati | Bhubaneshwar-Cuttack | Surat Rural
          | Mandsaur | Khammam | Raipur | Sambhal District | Warora | Siddipet
          District | Tiruppur | Dhandhuka | Umreth | Bareja | Pardi | Nayagarh |
          Ladwa | Garkha | Venkatgiri | Naidupeta | Malmaliya | Puducherry |
          Sitamarhi | Udham-Singh-Nagar | Nellore | Ambala | Agra | Madurai |
          Kekri | Gulbaraga | Sambalpur | Jharsuguda | Faridabad | Dumraon |
          Rourkela | Amethi District | Malur | Hardoi | Darbhanga | Gaya |
          Motihari | Angul | Chhindwara | Ganjam | Bassi | Hindaun | Jagraon |
          Karauli | Dausa | Himachal Pradesh | Gangapur City | Thiruttani |
          Vidisha | Aligarh District | Chandrapur | Lalsot | Navsari |
          Hoshangabad | Patan | Siddhpur | Unjha | Robertsonpet | Kalol | Kadi |
          Himatnagar | Mehsana | Amaravathi | Gwalior | Rajkot | Allahabad |
          Bareilly | Jodhpur | Palakkad | Palwal | Kalinga Nagar | Wyra | Nagari
          | Chinhat | Vellakovil | Mansa | Begusarai | Haripal | Udgir |
          Narketpalle | Buxar | Multai | Alleppey | Naini | Munger | Panchkula |
          Arakkonam | Bhangar | Butibori | Pilakhua District | Balaghat |
          Pandhurna | Asansol | Bihar Sharif | Ankleshwar | Palitana | Sagar |
          Bharuch | Madhubani | Bettiah | Visnagar | Itarsi | Khordha | Dewas |
          Bagru | Kurukshetra | Madanapalle | Patna | Yamuna Nagar | Kaithal |
          Ranihati | Mangalore | Mandideep | Madanpur | Manali | Bagula |
          Taherpur | Bulandshahr District | Hanskhali | Guskhara | Thakurnagar |
          Kangeyam | Erode | Botad | Hosur | Eluru | Ghaziabad | Muzzafarpur |
          Delhi | Gurgaon | Bangalore | Chikkaballapura District | Srikakulam
          Disctrict | Vizianagaram Disctrict | Yanam District | Modinagar
          District | Coimbatore | Gautam Buddha Nagar District | Anantapur
          District | Vijayawada-Guntur | Vijayapura | Sidlaghatta | Hindupur |
          Dhanbad | Gauribidanur | Doddaballapura | Jewar | Muradnagar | Tribeni
          | Santipur | Aurangabad | Halflong | Kheri | Krishnagiri | Mandya |
          Jehanabad | Shaheed Bhagat Singh Nagar | Nawanshahr | Parwanoo |
          Jajpur | Krishna District | Ashta | West-Godavari | Guntur-Rural |
          Kota | Tumakuru | Vadodara | Pune | Visakhapatnam | Borsad | Petlad |
          Phagwara | Daman | Silvassa | Bhojpur | Siwan | Ranchi | Jhunjhunu |
          Vaniyambadi | Churu | Salcete | Bangarpet | Tuni | Dharampur |
          Bhadradri Kothagudem District | Bhopal Rural | Ghanpur | Athagad |
          Krishnarajanagara | Palamaner | Barh | Kolkata Rural | Kochi Rural |
          Tirwanganj | Bavla | Sonepur | Mokama | Nawada | Moga | Nakodar |
          Kanpur | Lucknow | Anand | Kamptee | Kapadvanj | Kalna | Rajpipla |
          Sitapur | Gurugram Rural | Beawar | Dhar | Bina | Amritsar | Sri City
          | Dhone | Malerkotla | Meerut District | Vapi | Tirora | Indore Rural
          | Punganur
        </Text>
      </Box>
      <Box
        display="flex"
        borderBottom="1px dotted white"
        h="300px"
        pl="50px"
        pr="30px"
      >
        <Box w="20%" pl="100px" pt="30px">
          <Box color="white" lineHeight="30px">
            <Text>Popular Categories</Text>
            <Text>Washing Powders</Text>
            <Text>Tea</Text>
            <Text>Other Vegetables</Text>
            <Text>Shampoo</Text>
          </Box>
        </Box>
        <Box w="20%" pt="30px" pl="100px">
          <Box color="white" textAlign="left">
            <Text>Raw Rice</Text>
            <Text>Liquid Soaps & Bars</Text>
            <Text>Whole Spices</Text>
            <Text> Cut Fruits & Vegetables</Text>
            <Text>bb Wallet T&Cs</Text>
            <Text>Vendor Connect</Text>
          </Box>
        </Box>
        <Box w="20%" pt="30px" pl="100px">
          <Box color="white" textAlign="left">
            <Text>
Sunflower Oils</Text>
            <Text>
Health Drinks</Text>
            <Text>Toothpaste</Text>
            <Text>
Glucose, Marie & Milk Biscui</Text>
            <Text>bb Wallet T&Cs</Text>
            <Text>
Chocolate</Text>
          </Box>
        </Box>
        <Box w="20%" pt="30px" pl="100px">
          <Box color="white" textAlign="left">
            <Text>Help</Text>
            <Text>FAQs</Text>
            <Text>Contact Us</Text>
            <Text>bb Wallet FAQs</Text>
            <Text>bb Wallet T&Cs</Text>
            <Text>Vendor Connect</Text>
          </Box>
        </Box>
        <Box w="20%" pt="30px" pl="100px">
          <Box color="white" textAlign="left">
            <Text>Fresho</Text>
            <Text>Surf Excel</Text>
            <Text>Britannia</Text>
            <Text>Haldirams</Text>
            <Text>Horlicks</Text>
            <Text>Vendor Connect</Text>
          </Box>
        </Box>
      </Box>
      <Box h="100px" background="black" color="#FFFFFF" pl="50px" pt="20px">
        <Text>Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd</Text>
      </Box>
    </Box>
  );
};
