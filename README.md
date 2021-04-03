## User Story

```

complete

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
done GIVEN I need a new, secure password
done WHEN I click the button to generate a password
done THEN I am presented with a series of prompts for password criteria
done WHEN prompted for password criteria
done THEN I select which criteria to include in the password
done WHEN prompted for the length of the password
done THEN I choose a length of at least 8 characters and no more than 128 characters
done WHEN prompted for character types to include in the password
done THEN I choose lowercase, uppercase, numeric, and/or special characters
done WHEN I answer each prompt
done THEN my input should be validated and at least one character type should be selected
done WHEN all prompts are answered
done THEN a password is generated that matches the selected criteria
done WHEN the password is generated
done THEN the password is either displayed in an alert or written to the page

Had some trouble with the for loop and getting my result to return to the text area, google and Chad the TA helped me figure it out. Still a little fuzzy on for loops.

<img src=./assets/images/js_1_47.PNG>
<img src=./assets/images/js_48_96.PNG>
<img src=./assets/images/js_97_116.PNG>

<img src=./assets/images/web_page_resting_state.PNG>
<img src=./assets/images/button_pressed_prompt_1.PNG>
<img src=./assets/images/prompt_1_no_numbers_alert.PNG>
<img src=./assets/images/prompt_1_less_8_alert.PNG>
<img src=./assets/images/prompt_1_more_128_alert.PNG>

<img src=./assets/images/lower_confirm.PNG>
<img src=./assets/images/upper_confirm.PNG>
<img src=./assets/images/number_confirm.PNG>
<img src=./assets/images/specials_confirm.PNG>

<img src=./assets/images/result.PNG>