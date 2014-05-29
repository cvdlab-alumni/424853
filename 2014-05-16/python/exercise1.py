#esercizio esonero 3 semplificato

from pyplasm import *
from scipy import *

from larcc import *
from finestraPorta import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])
rosa = [1,0.855,0.725]

master = assemblyDiagramInit([5,9,2])([[.3,12,.1,8,.3],[.1,4,.3,2,.2,21,.2,9,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),GREEN,2)
toRemove = [21,23,25,29,33,47,54,55,56,57,61,63,65,69,72,73,74,75]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#VIEW(hpc)

V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),GREEN,2)

#VIEW(hpc)

"""Bathroom"""
toMerge = 45
doorBathroomDiagram = assemblyDiagramInit([1,3,2])([[.1],[1,2,6],[2.4,.3]])
master = diagram2cell(doorBathroomDiagram,master,toMerge)

"""Balcony"""
toMerge = 34
balconyDiagram = assemblyDiagramInit([1,1,2])([[0.1],[4],[1.5,1.2]])
master = diagram2cell(balconyDiagram,master,toMerge)

"""Balcony angle column right"""
toMerge = 32
balconyColumnRDiagram = assemblyDiagramInit([1,1,2])([[0.1],[.1],[1.5,1.2]])
master = diagram2cell(balconyColumnRDiagram,master,toMerge)

"""input door"""
toMerge = 30
doorInDiagram = assemblyDiagramInit([3,1,2])([[8.5,2,1.5],[.1],[2.4,.3]])
master = diagram2cell(doorInDiagram,master,toMerge)

"""Main room"""
toMerge = 27
doorDiagram = assemblyDiagramInit([2,1,2])([[10,2],[0.1],[2.4,.3]])
master = diagram2cell(doorDiagram,master,toMerge)

"""Door balcony"""
toMerge = 24
doorBalconyDiagram = assemblyDiagramInit([3,1,2])([[8.5,2,1.5],[0.1],[2.4,.3]])
master = diagram2cell(doorBalconyDiagram,master,toMerge)

"""Balcony2"""
toMerge = 19
balcony2Diagram = assemblyDiagramInit([1,1,2])([[12],[.1],[1.5,1.2]])
master = diagram2cell(balcony2Diagram,master,toMerge)

"""Balcony3"""
toMerge = 3
balcony3Diagram = assemblyDiagramInit([1,1,2])([[4],[.3],[1.5,1.2]])
master = diagram2cell(balcony3Diagram,master,toMerge)

"""Balcony angle column left"""
toMerge = 1
balconyColumnLDiagram = assemblyDiagramInit([1,1,2])([[0.3],[.1],[1.5,1.2]])
master = diagram2cell(balconyColumnLDiagram,master,toMerge)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)



toRemove = [96,94,92,90,85,81,75,72,70,65]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
master = STRUCT(MKPOLS(master))
doorInsideMainRoom = T([1,2,3])([.3+10,.1+4+.3+2+.2+21,.3])(doorInside)
doorInsideIngresso = T([1,2,3])([.3+8.5,.1+4+.3+2+.2+21+.2+9,.3])(doorInside)
doorInsideBathroom = T([1,2,3])([.3+12+.2,.1+4+.3+2+.2+21+.2+1,.3])(R([1,2])(PI/2)(doorInside))
appartamentoArredo = COLOR(rosa)(STRUCT([master,doorInsideBathroom,doorInsideIngresso, T([1,2,3])([.3+8.5,.1+4+.3+2,.3])(doorBalcony),doorInsideMainRoom ]) )
appartamento1 = R([2,2])(3/2*PI)(appartamentoArredo)
biAppartamento = STRUCT([R([1,2])(PI)(appartamento1),appartamentoArredo])
VIEW(biAppartamento)
