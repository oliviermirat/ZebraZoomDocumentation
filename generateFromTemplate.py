keywords = [" <<< freelySwim", " <<< headEmbedded", " <<< centerOfMass1perWell"]
fileNames = ["docs/softwareTutorial/freelySwim.md", "docs/softwareTutorial/headEmbedded.md", "docs/softwareTutorial/centerOfMass.md"]

for i in range(0, 3):
  keywordToKeep    = keywords[i]
  keywordsToRemove = keywords.copy()
  keywordsToRemove.remove(keywords[i])
  with open(fileNames[i], 'w') as writer:
    with open('template.md', 'r') as reader:
      for line in reader:
        insert = True
        for keywordToRemove in keywordsToRemove:
          if keywordToRemove in line and not(keywordToKeep in line):
            insert = False
        if insert:
          for keyword in keywords:
            line = line.replace(keyword, "")
          writer.write(line)
