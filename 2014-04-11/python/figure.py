#figure
from larcc import *
from pyplasm import *

#albero conico
baseAlbero = COLOR(BROWN)(CYLINDER([.1,.6])(32))
sopraAlbero = COLOR(GREEN)(CONE([0.4,1.2])(32))
albero = STRUCT([baseAlbero, T(3)(.6)(sopraAlbero)])

#albero sferico
baseAlberoS = COLOR(BROWN)(CYLINDER([.1,.6])(32))
sopraAlberoS = COLOR(ORANGE)(SPHERE(0.3)([24,32]))
alberoS = STRUCT([baseAlberoS, T(3)(.8)(sopraAlberoS)])

#luce
baseLuce = (COLOR(PURPLE))(CYLINDER([.02,1])(32))
sopraLuce = (COLOR(YELLOW))(SPHERE(0.1)([24,32]))
luce = STRUCT([baseLuce, T(3)(1)(sopraLuce)])

#VIEW(alberoS)