# Bugdet
 This repository tracks budget automatically using google services based on online bank statements downloaded in **.csv** format. 
 A simple pipeline where google script calculates your expenses from given expected expenses against the actual one.
 The google script is compatible with the **N26 Bank** statement sheet. In general, it is compatible with any online bank that provides categories in the bank statements 
 
 ## Pipeline
 * Categorized bank statement with dates downloaded from your bank
 * Google drive to host your bank statement 
 * Google sheet template **Monthly Budget**
 * Google app script to automatically parse the bank statement in which    calculation of planned in respect of actual expenses 
 * Notification by Gmail 
 * Google Assitant trigger *still under development*  

 ## Setting up the environment 
 Steps for setting up the environment for the first time 
1. Create a [google sheet][https://www.google.com/sheets/about/] from template **Monthly budget** s
2. Download the script and copy it to your [google app script][https://developers.google.com/apps-script] 
3. Configure your script trigger by selecting the event source [google app script][https://script.google.com/home/triggers] 
4. Manually download your bank statement with your desired duration in **csv format** and uploaded it to your [google drive][https://www.google.com/intl/en_in/drive/] *(A schedule step which shall be done, every time you want to change the bank statement dates ex: Jan, Feb, March)*

## Utilization 
Easy steps to utilize the script to your custom needs
* Inside the "Summary" google sheet which was created in step 1, add or remove categories to match your online bank categories 
* Inside  the main function, replace the URL with the google sheet created in step 1 
* N26 standard categories and file names are being used by the script. In case you are using a different bank then adapt the categories and import file name.
* Replace all *9999* values with your planned expenses, the script calculates the expenses per day, for example, if your monthly budget for transportation is 120$, then the      planned transportation equation =  the number of days * 4$
Based on your bank statement, the script will create a **Statement** sheet use it to fill the transactions sheet and calculate the number of days
* The script will calculate the planned and fill the **Summary** sheet, then it will add the actual  expenses
* The sheet will calculate the difference and plot *( Actual vs Planned)*
* The script will notify by e-mail 

