The Frappe Language Toggle Application is a custom JavaScript (JS) app developed to toggle between English (eng) and Arabic (ar) languages in the Frappe framework. The primary purpose of this application is to provide an intuitive and seamless way for users to switch between the two languages on the fly. This document outlines the app's functionalities, setup instructions, and usage.

##Features

#Real-Time Language Switching: The application allows users to change the interface language between English and Arabic in real time, without having to refresh the page.

#Persistent Language Settings: The selected language setting is saved in the user's session data, ensuring the language preference is persistent across different sessions for a more personalized user experience.

##Prerequisites

This application is built on top of the Frappe framework. Before you can use this app, make sure that you have a Frappe environment set up. If you don't have it, you can follow these instructions to set up Frappe on your system.

##installation
1. Navigate to your Frappe bench folder in your terminal.

    cd frappe-bench

2. Get the application from GitHub using the below command.

    bench get-app https://github.com/zaid2229/language-toggle.git

   
3. Install the application onto your site.

    bench --site [site-name] install-app change_langauge

4. Build the site

    bench build
   
5. Migrate the database.

    bench --site [site-name] migrate

##Usage

Once the app is installed, you will see a language toggle switch on the top-right corner of your Frappe application. You can simply click on this switch to toggle between English and Arabic.



    
    
