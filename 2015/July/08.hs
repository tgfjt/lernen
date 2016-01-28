doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

wSmallNumber x = if x > 100
  then x
  else x * 2

  wSmallNumber' x = (if x > 100
    then x
    else x * 2) + 1

  joinListInt = 0:([1,2,3,4] ++ [5,6,7,8])
-- [0,1,2,3,4,5,6,7,8]

joinListStr = 'a':(" ice" ++ " candy")
-- "a ice candy"

pick3ofList = ([6,6,6] : [[1,2,3], [5,3,3], [1,2,2], [9,8]] ++ [[1,1]]) !! 3
--[1,2,2]

samplist = [5,4,3]

headsample = head samplist
--5

tailsample = tail samplist
--[4,3]

lastsample = last samplist
--3

initsample = init samplist
--[5,4]

lengthsample = length samplist
--3

nullsample = null samplist
--False

reversesample = reverse samplist
--[3,4,5]

takesample = take 2 samplist
--[5,4]

elemsample = elem 4 samplist
--True

--減少列はこれじゃダメで空リストになる [10..1] = []
--なので、こうする。[10,9..1]
--遅延評価なのでデカイリストは作らなくて済む
rangesample = take 5 [1,3..33 * 100]
--[1,3,5,7,9]
