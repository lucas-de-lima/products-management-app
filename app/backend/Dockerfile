# Use a Java Development Kit image with Gradle
FROM gradle:8.5.0-jdk21 AS builder

# Create a directory for the project
WORKDIR /app-backend

# Copy the Gradle files to the image
COPY build.gradle.kts .
COPY settings.gradle.kts .
#COPY gradle.properties .

# Copy the source code
COPY src src

# Build the project
# RUN gradle build -x test executar sem testes pode omitir erros, usar com cuidado
RUN gradle build -x test

# Use a Java runtime image
FROM amazoncorretto:21-alpine-jdk

# Set the working directory
WORKDIR /app-backend

# Copy the built JAR file from the builder stage
COPY --from=builder /app-backend/build/libs/backend-0.0.1-SNAPSHOT.jar .

# Expose port 3001
EXPOSE 3001

# Run the application
CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
