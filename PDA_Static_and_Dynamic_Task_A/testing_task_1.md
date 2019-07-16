### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

#throughout the class, the method .value is undefined.

#the formatting for the method name below is wrong. Should be chack_for_ace(.)
  def checkforAce(card)
#the = below should be ==
    if card.value = 1
      return true
    else
      return false
    end
  end

#on the line below dif should be def and shouldn't be indented so far. There is also a comma missing between card1 and card2.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    #card on the line below is an undefined variable, it should be card1
    return card
  else
    return card2
  end
end
#the "end" below is superfluous.
end

def self.cards_total(cards)
  #on the line below total is undefined, perhaps it should be 'total = 0'
  total
  for card in cards
    total += card.value
    #total requires .to_s and this line should be below the following line
    return "You have a total of" + total
  end
end

#there should be another 'end' below to end the class definition
```
