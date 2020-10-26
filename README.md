Password Generator
Password generator in JavaScript

Application for password generation created in JavaScript.

User can select password that can contain eiter: lower case, upper case, digits or special characters.
User can choose password length between 8-128 characters. Initial setting is 12 characters.
How code works:

Based on user selection, "working string" is created that is used to pick up random characters from
I am using function in the loop (based on password length) to pick up random characters from "working string"
After password is generated I am doing addtitional check if password contains characters required by user. If it does not contain required characters then password generation is invoked again.
User has an option to copy password string to computer/mobile clipboard.
Website with application: https://kennyskasa.github.io/PasswordGen
