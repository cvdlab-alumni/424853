#Exercise 1
from larcc import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([5,9,2])([[.3,12,.1,8,.3],[.1,4,.3,2,.2,21,.2,9,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),GREEN,2)
#VIEW(hpc)

toRemove = [21,23,25,29,33,47,54,55,56,57,61,63,65,69,72,73,74,75]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)

"""Balcony"""
#Balcony
toMerge = 19
balconyDiagram = assemblyDiagramInit([1,1,2])([[0.1],[0.1],[1.5,1.8]])
master = diagram2cell(balconyDiagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
toRemove = [72]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 3
balcony2Diagram = assemblyDiagramInit([1,1,2])([[0.1],[0.1],[1.5,1.8]])
master = diagram2cell(balcony2Diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
toRemove = [72,1]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

toMerge = 31
balcony3Diagram = assemblyDiagramInit([1,1,2])([[0.1],[0.1],[1.5,1.8]])
master = diagram2cell(balcony3Diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
toRemove = [71,29]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

"""Main room"""
toMerge = 21
doorBalconyDiagram = assemblyDiagramInit([3,1,2])([[8,2.5,1.5],[0.1],[2.4,.3]])
master = diagram2cell(doorBalconyDiagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)

toRemove = [71]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)

VIEW(hpc)

toMerge = 23
doorDiagram = assemblyDiagramInit([2,1,2])([[10,2],[0.1],[2.4,.3]])
master = diagram2cell(doorDiagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)

toRemove = [75]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

VIEW(hpc)
DRAW(master)