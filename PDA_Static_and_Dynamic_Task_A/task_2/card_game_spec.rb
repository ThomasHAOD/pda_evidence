require("minitest/autorun")
require('minitest/rg')
require_relative('card_game.rb')
require_relative('card.rb')

class RecordTest < MiniTest::Test

  def setup()
    @cards = [
      @card1 = Card.new("hearts", 1),
      @card2 = Card.new("diamonds", 5)
      ]
    @game = CardGame.new()
  end

  def test_check_for_ace__true()
    assert_equal(true, @game.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal(@card2, @game.highest_card(@card1, @card2))
  end

  def test_cards_total()
    result = "You have a total of 6"
    assert_equal(result, CardGame.cards_total(@cards))
  end

end
