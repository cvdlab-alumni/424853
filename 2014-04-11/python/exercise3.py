#exercise3
#small area plan
from larcc import *
from pyplasm import *
from palazzoDellaCivilta import *
from edificio1 import *
from edificio2 import *



#coordinate strade
V = [[0,0],[10,0], [20,0], [23,0],
	 [0,15],[7,15],[10,15],[20,15],[23,15],
	 [0,23],[7,23],
	 [0,27],[7,27],
	 [0,31],[7,31],[23,31]	 
	]
FV = [[0,1,6,5,4,0],
	  [1,2,7,6,1],
	  [2,3,8,7,2],
	  [4,5,10,9,4],
	  [9,10,12,11,9],
	  [11,12,14,13,11],
	  [5,6,7,8,15,14,12,10,5]
	 ]



zone =EXPLODE(1.01,1.01,1)( MKPOLS((V,FV)))
erbaSx = (COLOR(GREEN))(CUBOID([10,15,.2]))
erbaDx = (COLOR(GREEN))(T([1])([20])(CUBOID([3,15,.2])))
piscina = T([1,2])([12,2])((COLOR(CYAN))(CUBOID([6,10,.2])))
edificioSx = S([1,2,3])([.4,.4,.4])(edificio)
quartiere = STRUCT([erbaDx,erbaSx,T([1,2])([10,20])(S([1,2,3])([10/17.6,10/17.6,10/17.6])(colosseoConBase)),zone, piscina,
			T([1,2])([0,16])(edificioSx), T([2])([27])((COLOR(BLACK))(edificio2))])
VIEW(quartiere)