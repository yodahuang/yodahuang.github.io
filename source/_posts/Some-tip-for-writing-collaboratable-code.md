---
title: Some tip for writing collaboratable code
date: 2018-04-27 20:06:29
tags:
---

Coding style and proper use of version management tool are usually not considered a big deal in academic environment. However, if you are to collaborate as a group on some code, it's better to take these into consideration. Reading toxic code in the morning can easily drain all of my energy the whole day.

- Always have **up-to-date** document describing what you have done. Ideally there should be a `README` describing high level concepts and APIs. In the code there should be docstrings and helpful tips here and there.
- Use comment for describing extra details, not for temporarily commenting out code. You have version control for recovering old code.
- Delete all the unnecessary files. Figuring out there're 20 files in the repository and only 2 of them are actually used and all the others are legacy files is not a good experience. You have version control for recovering old files.
- Laying out the files in a structured way. For example, put images in the `/imgs` folder instead of letting it floating everywhere
- If using git as version control tool, commit everytime when you add a new feature or fix some bugs. Do not put everything in a commit. This makes debugging hard since it's not easy to revert it.
- Write useful commit messages. For example, which parameter is changed and why
- Never use `git add --all` or `git add .`. Put random generated files in `.gitignore`, such as `.DS_Store` or `__pycache__`
- Look at other's commit and take some time studying what they are doing.
- Spend some time for how to write Markdown and how to use Git. It's **not hard**, if you are not **too busy**

## Q&A

- My code works, since it works it's good. Why do I need to consider something else? 
    - By spending some time on your side can saving your teammate a huge amount of time on their end. Just do them a flavor. your teammate will appreciate you for eliminating headache