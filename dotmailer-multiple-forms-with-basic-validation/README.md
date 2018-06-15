Form 1 is a sidebar mailing list sign up block. The consent checkbox, once clicked, will ping the user to another form so they
can sign up for more marketing information. While not very friendly UX-wise, it's what the client wanted. Another possible issue
with this method is JS popup blockers, as JS is opening it rather than the user directly opening it, there's a chance it will get
blocked.

Form 2 is a drupal webform with a markup component added onto the end. The checkbox is used just for consent, then i use JS to target
it and use it as a conditional. Unfortunately, i had to create my own basic form validation as the if statement around whether the user
gets to the next form was still firing, despite the form being incorrect. Here i just simply tested for if the fields had nothing in them.
