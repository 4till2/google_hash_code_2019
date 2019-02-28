from collections import defaultdict
from collections import Counter

if __name__ == "__main__":

    f = open('b_lovely_landscapes.txt');
    n = int(f.readline().strip());

    hashmap = defaultdict(list);
    nodes = list();

    for idx in range(n):

        line = f.readline().strip();
        line = line.split();
        nodes.append({
            "dir": line[0],
            "id": idx,
            "nodes": list(),
            "tags": line[2:],
        });

        for tag in nodes[idx]["tags"]:
            if tag in hashmap.keys():
                hashmap[tag].append(idx);
            else:
                hashmap[tag] = [idx];

    for node in nodes:
        for tag in node["tags"]:
            node["nodes"].extend(hashmap[tag]);

    result = [];
    resset = set();

    for idx in range(n):

        thisSet = set(nodes[idx]["tags"]);
        thisDir = nodes[idx]["dir"];
        interCnt = {};

        for nodeIdx in nodes[idx]["nodes"]:

            if (nodeIdx in resset):
                continue ;
            if (thisDir == "V" and nodes[nodeIdx] != "V"):
                continue ;

            otherSet = set(nodes[nodeIdx]["tags"]);
            diff = otherSet.difference(thisSet);
            inter = otherSet.intersection(thisSet);
            interCnt.update({abs(len(diff) - len(inter)): nodeIdx});

            resId = interCnt[min(interCnt, key=interCnt.get)];

            if (thisDir == "V"):
                if (idx not in resset and resId not in resset):
                    result.append([str(idx), str(resId)]);
            elif (thisDir == "H" and resId not in resset):
                result.append([str(resId)]);

            resset.add(nodeIdx);

    with open('output.txt', 'w') as afile:

        afile.write(str(len(result)) + '\n');

        for item in result:
            afile.write(' '.join(item) + '\n');
