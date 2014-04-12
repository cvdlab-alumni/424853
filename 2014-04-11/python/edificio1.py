#edificio quadrato con 4 torri agli angoli
from larcc import *

'''ritorna le faccia della figura, eliminando le facce in comune'''
def face2edge(FV):
        edges = AA(sorted)(CAT([TRANS([face[:-1],face[1:]]) for face in FV]))
        return AA(eval)(set(AA(str)(edges)))

#coordinate vertici
V = [[0,0],[4,0],[12,0],[16,0],[2,2],[4,2],[12,2],[14,2],[0,4],[2,4],[14,4],[16,4],[0,12],[2,12],[14,12],[16,12],[2,14],[4,14],[12,14],[14,14],[0,16],[4,16],[12,16],[16,16]]

#celle
FV = [[0,1,5,4,9,8,0],[2,3,11,10,7,6,2],[4,5,6,7,10,14,19,18,17,16,13,9,4],[12,13,16,17,21,20,12],[14,15,23,22,18,19,14]]

model = MKPOLS((V,FV))
#VIEW(STRUCT(model))

EV= face2edge(FV)

#creo la topologia
modelEdges=(V,EV)
modelFaces=(V,FV)
#VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((modelEdges))))
#VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((modelFaces))))

V0=AA(LIST)([0.,3.,6.,9.,12.])
C0V=AA(LIST)(range(5))
C1V = [[0,1],[1,2],[2,3],[3,4]]

#print mi da numero di celle e vertii in questo caso 4
modelFloor = V0,C0V
modelWall = V0,C1V

#stampa il pavimento su piu piani
#pavimento pieno
mod2D = larModelProduct([modelFaces,modelFloor])

#pavimento trasparente
mod1d = larModelProduct([modelEdges,modelFloor])

#pavimenti con aggiunta mura
mod11d = larModelProduct([modelEdges,modelWall])

#VIEW(STRUCT(MKPOLS((mod11d))))

#VIEW(EXPLODE(1.3,1.3,1.3)(MKPOLS(mod11d) + MKPOLS(mod2D)))

piani = STRUCT(AA(COLOR(BLUE))(MKPOLS(mod1d)) + MKPOLS(mod2D))
wall = STRUCT(MKPOLS(mod11d))
edificio = STRUCT([piani,wall])
edificioTraslato = ([wall],[5,5,5])
#VIEW(EXPLODE(1.2,1.2,1.3)([edificioTraslato]))
#VIEW(EXPLODE(1.2,1.2,1.3)([piani,wall]))
