import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Layout from "../../components/Layout";
let data = `<h2 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 24px; clear: both;  text-align: center;">ABOUT GENTING DREAM</h2>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">&nbsp;</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Genting Dream is a cruise ship of Dream Cruises. She was previously ordered as Genting World for Star Cruises. The ship is designed for the Asian cruise market. The Genting Dream has a length of 335.33 metres, a width of 39.7 metres, a size of 150,695 GT, and a top speed of over 23 knots.</p>
<table class="tours-tabs_table" style="box-sizing: border-box; margin: 30px 0px; padding: 0px; border-collapse: separate;  width: 770.391px; border-top: 2px solid rgb(228, 228, 228); border-right-style: none; border-bottom: 1px solid rgb(228, 228, 228); border-left-style: none; font-size: 0.933em; font-family: SolaimanLipi, Arial, sans-serif; height: auto;">
<tbody style="box-sizing: border-box; margin: 0px; padding: 0px;">
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DEPARTURE/RETURN LOCATION</strong></td>
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;">SINGAPORE-LANGKAWI-PHUKET-SINGAPORE</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DEPARTURE TIME</strong></td>
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;">Please arrive at least 3 hours before the flight.</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">INCLUDED</strong></td>
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;">
<table style="box-sizing: border-box; margin: 0px; padding: 0px; border-collapse: separate; width: 434.156px; border-style: none; font-size: 13.062px; height: auto;">
<tbody style="box-sizing: border-box; margin: 0px; padding: 0px;">
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Accommodations</td>
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">&nbsp;</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Car/ Jeep Transportation</td>
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Meal as per itinerary</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">NOT INCLUDED</strong></td>
<td style="box-sizing: border-box; margin: 0px; padding: 20px 20px 20px 0px; border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(228, 228, 228); text-align: left; vertical-align: top;">
<table style="box-sizing: border-box; margin: 0px; padding: 0px; border-collapse: separate; width: 434.156px; border-style: none; font-size: 13.062px; height: auto;">
<tbody style="box-sizing: border-box; margin: 0px; padding: 0px;">
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Entrance fees</td>
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Visa fees</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Personal cost</td>
<td style="box-sizing: border-box; margin: 0px; padding: 0px; border-style: none; text-align: left; vertical-align: top;">Guide&nbsp;gratuity</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Minimum booking 2 People to ensure this tour.*</strong></p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">&nbsp;</p>
<h2 class="item_content" style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 24px; clear: both;  text-align: center;">&nbsp;<strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">TOUR ITINERARY</strong></h2>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">&nbsp;</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; ">&nbsp;</h3>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DAY&nbsp;01: DHAKA TO SINGAPORE</strong></h3>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Start Journey from Dhaka Hazrat Shahjalal International airport towards Changi international airport. Our representative will meet and greet at airport and transfer you to Hotel, free and easy for the day.<br style="box-sizing: border-box; margin: 0px; padding: 0px;">Overnight in Singapore</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Meal: N/A</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DAY 02: DREAM CRUISE BOARDING</strong></h3>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">You will get transferred to the Marina Bay Cruise Centre Singapore, once you reach there you will go through the immigration, once you finish the procedure of the immigration, you will be guided to the cruise and check in to the cruise. After settling down in to your room you can go on the deck, explore the beautiful cruise, enjoy the tea snacks and most of all enjoy the lovely sunset over the sea. Dinner will be served at around 9 pm, enjoy the dinner with good music and lovely atmosphere on the deck, by then you will already be in the deep sea.<br style="box-sizing: border-box; margin: 0px; padding: 0px;">Overnight in the cruise</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Meal: Lunch, Dinner</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DAY 03: LANGKAWI CITY</strong></h3>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">After a full night Journey, Early morning the cruise will be harbored at Langkawi city, after breakfast you have the option to visit the city on your own. (city land tour is not included in the package) You will return back to the cruise at a given time. You also have the option to stay back in the cruise. Evening snacks will be served with lots of entertainment in the cruise, later dinner will be served, enjoy the lovely dinner and the amazing environment. Cruise will be on its way when all guest are on board.<br style="box-sizing: border-box; margin: 0px; padding: 0px;">Overnight in the cruise</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Meal: Breakfast, Dinner, (Lunch only if you stay back in the cruise)</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DAY 04: PHUKET CITY</strong></h3>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Early morning the cruise will be harbored at Next destination, after breakfast you will be taken for a Phuket city tour. Later in the evening you will be transferred to the cruise by 5 pm. You also have the option to stay back in the cruise. Evening snacks will be served with lots of entertainment in the cruise, later dinner will be served, enjoy the lovely dinner and the amazing environment. Cruise will be on its way Back to Singapore. Grand dinner will be served today with lots of entertainment and live music, the Captains will join you for dinner and entertain you.&nbsp; Overnight in the cruise Meal: Breakfast, Dinner, (Lunch only if you stay back in the cruise)</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">DAY 05: SINGAPORE ARRIVAL AND DEPERTURE FOR DHAKA</strong></h3>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">By morning the cruise will reach Singapore, after breakfast you will check out of your room and disembark the ship. Later you will go through the immigration process, after immigration you will be received by our representative and transfer you transfer to Changi airport for coming back to Dhaka with vibrant and colorful mind.<br style="box-sizing: border-box; margin: 0px; padding: 0px;">Overnight in Singapore</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Meal: Breakfas</p>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">Please follow the schedule of proposed Cruising:</p>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Package Price: Price in BDT per person.</strong></h3>
<table style="box-sizing: border-box; margin: 0px 0px 24px; padding: 0px; border-collapse: separate;  width: 770.391px; border-width: 1px 0px 0px 1px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); font-family: SolaimanLipi, Arial, sans-serif; height: 175px;" width="248">
<tbody style="box-sizing: border-box; margin: 0px; padding: 0px;">
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="189">Services/Specification</td>
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="90">1-2 pax</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="189">03 Nights and 04 Days Land package price</td>
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="90">&nbsp;</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="189">Visa Fee (SINGAPORE, THAILAND, MALAYSIA)</td>
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="90">&nbsp;</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="189">Air ticket price</td>
</tr>
<tr style="box-sizing: border-box; margin: 0px; padding: 0px;">
<td style="box-sizing: border-box; margin: 0px; padding: 4px 6px; border-width: 0px 1px 1px 0px; border-style: solid; border-color: rgba(0, 0, 0, 0.1); text-align: left;" width="189">Grand Total</td>
</tr>
</tbody>
</table>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Package Inclusions:</strong></h3>
<ul style="box-sizing: border-box; margin: 0px 0px 1.5em 3em; padding: 0px; list-style-type: disc; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">International Flight Dhaka to Singapore Return</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">1 Nights&rsquo; Accommodation in Singapore Hotel</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">3 Nights&rsquo; Accommodation in Dream Cruise</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">1 Breakfast at the hotel in Singapore</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">3 Breakfast, 3 Lunch (If stayed Back In the Cruise During city Tour) and 3 Dinner at the Cruise</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Airport Transfer (7am to 10pm): Airport to Marina Bay, Marina Bay to Hotel, Hotel to Airport.</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Cultural Program &amp; Entertainment that are included in the package</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Swimming Pool &amp; Jacuzzi on the deck</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">And all the complementary activities and shows that are included in the package</li>
</ul>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; font-family: SolaimanLipi, Arial, sans-serif; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; "><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Package Exclusion:</strong></h3>
<div class="item_content" style="box-sizing: border-box; margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: SolaimanLipi, Arial, sans-serif; font-size: 14px; ">
<ul style="box-sizing: border-box; margin: 0px 0px 1.5em 3em; padding: 0px; list-style-type: disc;">
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Visa fee</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Air ticket</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Personal expenses</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Per person per night Gratitude of 21 SGD is Not included.</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Which is not mentioned above.</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Lunch and Dinner in the hotel in Singapore</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">City Tour where the cruise will stop</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any personal shopping</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any extra service in hotel like laundry, in room food service.</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any extra meal ordered in the cruise</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any meal in the premium restaurant</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any in house show tickets</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Any hard drinks and cocktails</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">Meals not mentioned in the itinerary</li>
</ul>
<h3 style="box-sizing: border-box; margin: 20px 0px 10px; padding: 0px; line-height: 1.1; color: rgb(51, 51, 51); font-size: 22px; clear: both; text-align: left; font-family: SolaimanLipi, Arial, sans-serif;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Cancellation policy:</strong></h3>
<ul style="box-sizing: border-box; margin: 0px 0px 1.5em 3em; padding: 0px; list-style-type: disc;">
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">0% before 30 days&nbsp; from date of departure</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">25% before 20 days from date of departure</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">50% before 50 days from date of departure</li>
<li style="box-sizing: border-box; margin: 0px; padding: 0px;">No refund within 7 days from date of departure</li>
</ul>
<p style="box-sizing: border-box; margin: 0px 0px 15px; padding: 0px;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;">Note:</strong>&nbsp;Cruise check in time at 15:30 check out time 18:00</p>
</div>`;

const Tour = () => {
  return (
    <Layout>
      {/* top  */}
      <div className=" w-full h-500px relative">
        <div className=" w-full py-20 h-full relative overflow-hidden">
          <div className=" w-full absolute h-full top-0 left-0">
            <img
              className="w-full h-full object-cover opacity-75"
              src="https://source.unsplash.com/random/400×1200/?sky"
              alt=""
            />
          </div>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
              <div className="w-3/4 h-44 glass rounded-lg flex justify-center items-center">
                <h1 className="flex-2 text-2xl text-transparent px-3 text-center bg-gradient-to-tr from-logoTag to-logoBlue bg-clip-text font-bold capitalize">
                  SINGAPORE DREAM CRUISE 5 DAYS AND 4 NIGHTS PACKAGE
                </h1>
                <div className="flex-1 h-full w-1/4 relative">
                  <img
                    className="w-72 absolute bottom-0"
                    src="/graphic/travel.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* imfo fast  */}
      <div className="w-full relative py-7 bg-travel min-h-screen">
        <div className="w-full max-w-6xl mx-auto backdrop-blur-sm p-4 ">
          <h1 className="text-3xl drop-shadow-md  font-bold capitalize text-transparent bg-gradient-to-tr from-logoBlue to-logoTag bg-clip-text">
            SINGAPORE DREAM CRUISE 5 DAYS AND 4 NIGHTS PACKAGE
          </h1>

          <p className="flex items-center text-lg text-neutral-700 ">
            <span className="text-logoTag text-xl pr-1">
              <BiTimeFive />
            </span>{" "}
            5 Day and 4 Night{" "}
          </p>
          <span className="w-48 h-1 rounded-xl relative inline-block bg-logoRay"></span>
          <span className="w-20 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
          <span className="w-4 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
        </div>
        <div className="relative w-full max-w-6xl mx-auto mt-5">
          <div className="w-full relative">
            <img className="relative w-full" src="/img/cox.jpg" alt="" />
          </div>
          <div className="w-full relative flex mt-1 overflow-hidden p-1 overflow-x-scroll">
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
              <img
                className="relative w-full h-full object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full max-w-6xl mx-auto  p-2 backdrop-blur-sm">
          <div className="w-full max-w-5xl mx-auto bg-gradient-to-tr from-logoSun/25 to-logoBlue/25 flex justify-between items-center p-3 rounded-md shadow-md my-7">
            <div className="text-2xl font-bold bg-gradient-to-br from-logoBlue to-logoTag text-transparent bg-clip-text">
              Price : 2000$
            </div>
            <div className="">
              <button className="btn btn-info">Book Now</button>
            </div>
          </div>
          <div className="w-full text-2xl text-center font-bold">
            {" "}
            Tour Details
          </div>
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </div>
      </div>
      {/* image?  */}
    </Layout>
  );
};

export default Tour;
