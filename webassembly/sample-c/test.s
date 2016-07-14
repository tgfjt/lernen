	.text
	.file	"test.bc"
	.globl	square
	.type	square,@function
square:                                 # @square
	.param  	i32
	.result 	i32
# BB#0:
	i32.mul 	$push0=, $0, $0
                                        # fallthrough-return: $pop0
	.endfunc
.Lfunc_end0:
	.size	square, .Lfunc_end0-square


	.ident	"Apple LLVM version 7.3.0 (clang-703.0.31)"
