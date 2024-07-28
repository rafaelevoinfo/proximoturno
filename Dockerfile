# Use a imagem base do SDK do .NET 8 para a etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copie o arquivo de projeto e restaure as dependências

COPY ProximoTurnoWebApp/*.csproj ./ProximoTurnoWebApp/
COPY ProximoTurnoWebApp.Client/*.csproj ./ProximoTurnoWebApp.Client/
COPY ProximoTurnoWebApp.sln ./

RUN dotnet restore

# Copie o restante do código da aplicação e compile
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# Use uma imagem runtime do .NET 8 para a etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish ./

# Expõe a porta padrão
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Defina o ponto de entrada para a aplicação
ENTRYPOINT ["dotnet", "ProximoTurnoWebApp.dll"]
