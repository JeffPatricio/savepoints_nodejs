# Config

- auth_api: 75f886a942b02d6ad0cb9b55ed94f480

==========================================================

# GET (/points)

## Saída
```
{
  success,
  message,
  points: [
    id,
    title,
    lat,
    lng,
    image,
    guidance
  ]
}
```

==========================================================

# POST (/points)

## Entrada (Multipart form)

- title : título do ponto de distruibuição
- lat: latitude do ponto de distribuição
- lng: longitude do ponto de distribuição
- guidance: orientações referentes ao ponto de distribuição
- file: imagem do ponto de distribuição

## Saída
```
{
  success,
  message,
  point: {
    id,
    title,
    lat,
    lng,
    image,
    guidance
  }
}
```

==========================================================
