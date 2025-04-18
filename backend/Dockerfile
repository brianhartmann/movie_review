# Start with a base image that has Java installed
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /

# Copy the jar file into the container
COPY target/movie_review-0.0.1-SNAPSHOT.jar movie_review-0.0.1-SNAPSHOT.jar

# Expose the port your app runs on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "movie_review-0.0.1-SNAPSHOT.jar"]
