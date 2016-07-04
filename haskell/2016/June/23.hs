replace :: String -> String
replace xs = [ l | x <- xs, l <- if (x == ' ') then "%20" else [x] ]

main = print (replace "a b c")

