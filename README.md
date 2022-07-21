# E-Commerce-Back-End

## Table of Contents

Please use this table of contents to navigate the README.

- [Descriptions](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

The goal of this project was to create the back end of an e-commerce application that would allow a manager at an internet retail company to utilize the latest technologies to enable the company to compete with other e-commerce companies. Additionally, the goal was to create an e-commerce platform that would utilize MySQl, Sequelize, and JavaScript to create models and routes where the user can run GET, POST, DELETE, and PUT requests to leverage and manipulate data in the database.

## Installation

Please use the following steps to install this application on your local computer:

-Step 1: Access the [Public GitHub Repository](https://github.com/AlexandertheGreat491/E-Commerce-Back-End.git)

-Step 2: Open a GitBash terminal and navigate to the folder that you want to use for this cloned repository.

-Step 3: In GitBash run the command git clone https://github.com/AlexandertheGreat491/E-Commerce-Back-End.git

If you ware using a license other than MIT you will need to change the license name in the package.json file.

-Step 4: Make sure that Insomnia is installed on your local device. If Insomnia is not installed on your local computer, navigate to the [Insomnia Docs](https://docs.insomnia.rest/) for installation instructions.

-Step 5: Open the folder that you saved the cloned repository in in your code editor and open the .env file. Leave the value for DB_NAME as it is. Make sure to change DB_USER to your MySQL username and change DB_PW to your MySQL password.

-Step 6: In your GitBash terminal you need to run:
 npm i 

 Running this command will ensure that all of the necessary libaries are available for the application.

-Step 7: Start the server by running the command: npm run watch.
This will start the server, connect to the database, and allow the utilization of nodemon.

-Step 8: In your terminal (recommend using a second terminal for your mysql commands) run: mysql -u <your username> -p
Then enter your password when prompted.

-Step 9: Run the MySQL command: USE ecommerce_db;

-Step 10: In your first terminal you will need to run: npm run seed.
This command will seed the category, product, product_tag, and tag tables.

After following these steps the application has been installed on you local computer and you can run the routes in Insomnia.


## Usage

Please watch the walkthrough video get an idea of how the application should be used on your local computer after following the installation instructions:

[E-Commerce Back End Walkthrough Video](https://vimeo.com/732172741)


## Credits

Collaborators:

[coding-boot-camp](https://github.com/coding-boot-camp/fantastic-umbrella)

[Alex Van Dyke](https://github.com/AlexandertheGreat491)

Tutorials:

[Dotenv](https://www.npmjs.com/package/dotenv)

[MySQL Reference Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-reference-guide)

[Nodemon](https://www.npmjs.com/package/nodemon)

[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[Sequelize](https://sequelize.org/v5/manual/getting-started.html)

[Sequelize](https://www.npmjs.com/package/sequelize)

[Working with Config Vars on Heroku](https://www.youtube.com/watch?v=g81LARb914Y&t=13s)

## License

[Link to license](./LICENSE)


