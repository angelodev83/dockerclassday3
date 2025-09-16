FROM #alpine image
WORKDIR #directory in container
COPY # path to package files
RUN # npm install
COPY . .
EXPOSE # port 3000
CMD #node and server for js
