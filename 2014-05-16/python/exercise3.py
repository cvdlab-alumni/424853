def NUMBERING_CELL(diagram):
	V,CV = diagram
	hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
	hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
	return hpc

def MERGE_CELL(master,diagrams,cellToMerge):
	V,CV = master
	for i in range(len(CV))[::-1]:
		if i in cellToMerge:
			k = cellToMerge.index(i)
			master = diagram2cell(diagrams[k],master,cellToMerge[k])
	return master

def REMOVE_CELL(cellToRemove,(V,CV)):
	return V,[cell for k,cell in enumerate(CV) if not (k in cellToRemove)]

def MERGING_NUMBERING_ELIMINATION(master, diagrams, cellToMerge, cellToRemove):
	NUMBERING_CELL(master)
	assert len(diagrams)==len(cellToMerge)

	if(len(cellToMerge)>0 and len(cellToRemove)>0):
		for i in range(len(cellToMerge)):
			count = 0
			for r in cellToRemove:
				if r<cellToMerge[i]:
					count += 1
			cellToMerge[i] -= count

	master = REMOVE_CELL(master,cellToRemove)
	master = MERGE_CELL(master,diagrams,cellToMerge)

	return master
	