--list comprehension
--リスト内包表記

sample1 = [x * 2 | x <- [1..5]]


sample2 = [x * 2 | x <- [1..5], mod x 2 == 1]


boomBangs xs = [if x < 10 then "boom!" else "bang!" | x <- xs, odd x]

removeNonUppercase str = [c | c <- str, elem c ['A'..'Z']]
--removeNonUppercase "Whoa!Woot!Woot"
--"WWW"
