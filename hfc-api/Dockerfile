# Get base SDK Image from Microsft
FROM mrc.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

#Copy the CSPROJ file and restore any dependecies via NUGET
COPY *.csproj ./
RUN dotnet restore

#Copy the project files and build our relese
COPY . ./
RUN dotnet publish -c Release -o out

#Generate runtime Image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
COPY --from-build-env /app/out .
ENTRYPOINT ["dotnet", "DockerAPI.dll"]

