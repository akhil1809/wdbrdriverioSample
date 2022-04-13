

import AppScreen from '../utils/AppScreen';


const selectors = {
    serach: {
        web: '#twotabsearchtextbox',
        android :'//*[@resource-id="com.example.myapplication:id/button_first"]',
       // android: '~com.example.myapplication:id/button_first'
    },

    searchBtn: {
        web: '[value="Go"]',
       android: '//*[@resource-id="com.example.myapplication:id/button_second"]',
       //android: '~com.example.myapplication:id/button_second',
    },
    
    productList: {
        web: '//a[@rel="noopener noreferrer"]/div[2]/div[1]/div[1]',
    },
    closePopupBtn: {
        web: '//button[text()="✕"]',
    },
};


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends AppScreen  {

  //  get serach(){
      ///  return $({
          //  web : '#twotabsearchtextbox',
           // android : 'id:ssds',
       // });
   // }
   

     async serachProduct()
     {
        //$(selectors.closePopupBtn).waitForDisplayed();
       // $(selectors.closePopupBtn).click();
        console.log(driver.isIOS);
        await $(selectors.serach).waitForDisplayed();
        //await $(selectors.serach).setValue('iOSMobile');
        
        await $(selectors.serach).click();
        await $(selectors.searchBtn).click();
        
        //$$(selectors.productList).
        // await this.serach.waitForDisplayed();
        // await this.serach.setValue('iOSMobile');
        // await this.serachBtn.click();
       // pause(3000);
      
     }
}

export default new LoginPage();
