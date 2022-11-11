
var builder = WebApplication.CreateBuilder(args);

//services cors
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
    policy  =>
    {
      // policy.WithOrigins("*", "http://localhost:3000/", "http://localhost:5000/api/valoresHaPagar" ,"http://localhost:3000", "http://localhost:8080", "http:192.168.2.152:8080")
      // .AllowAnyHeader()
      // .AllowAnyMethod();
      policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//Injeção de dependecia para banco de dados
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
builder.Services.AddDbContext<ApiDbContext>(options => 
{ 
  options.UseNpgsql(builder.Configuration.GetConnectionString("Default")); 
});
builder.Services.AddScoped<IValoresHaPagarRepo, ValoresHaPagarRepo>();
// builder.Services.AddEndpointDefinitions();
builder.Services.AddScoped<IValoresHaPagarRepoViews, ValoresHaPagarRepoViews>();
builder.Services.AddScoped<IValoresHaPagarJaPagosRepo, ValoresHaPagarJaPagosRepo>();
builder.Services.AddScoped<IMeioDePagamentoViewsRepo, MeioDePagamentoViewsRepo>();
builder.Services.AddScoped<ICartaoRepo, CartaoRepo>();
builder.Services.AddScoped<ITipoDeCartaoRepo, TipoDeCartaoRepo>();
builder.Services.AddScoped<IMeioDePagamentoRepo, MeioDePagamentoRepo>();
builder.Services.AddScoped<IUsersInfosRepo, UsersInfosRepo>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


//App builder
var app = builder.Build();

//app cors
app.UseCors(MyAllowSpecificOrigins);


// api/valoresHaPagar
app.MapPost("api/valoresHaPagar", async (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, ValoresHaPagarCreateDto valoresHaPagarCreateDto) => {
   Console.WriteLine(valoresHaPagarCreateDto);
  var valorHapagarModel = mapper.Map<ValoresHaPagar>(valoresHaPagarCreateDto);
  await valoresHaPagarRepo.CreateValoresHaPagar(valorHapagarModel);
  await valoresHaPagarRepo.SaveChangesAsync();
  var valorHaPagarRead = mapper.Map<ValoresHaPagarReadDto>(valorHapagarModel);
  return Results.Created($"api/valoresHaPagar/{valorHaPagarRead.codigo}", valorHaPagarRead);
});
app.MapGet("/api/valoresHaPagarByUser/{idUser}", (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, int idUser) => {
  var valoresPagar = valoresHaPagarRepo.GetAllValoresHaPagarByUser(idUser);
  return Results.Ok(mapper.Map<IEnumerable<ValoresHaPagarReadDto>>(valoresPagar));
});
app.MapGet("api/valoresHaPagarAtivosByUser/{idUser}", (IValoresHaPagarRepoViews valoresHaPagarRepo, IMapper mapper, int idUser) => {
  var valoresPagar = valoresHaPagarRepo.GetAllValoresHaPagarByUser(idUser);
  return Results.Ok(mapper.Map<IEnumerable<ValoresHaPagarReadDtoViews>>(valoresPagar));
});
app.MapGet("api/valoresHaPagar/{id}", async (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, int id) => {
  var valorHaPagar = await valoresHaPagarRepo.GetValoresHaPagarId(id);
  if(valorHaPagar != null) {
    return Results.Ok(mapper.Map<ValoresHaPagarReadDto>(valorHaPagar));
  }
  return Results.NotFound();
});
app.MapPut("api/valoresHaPagar/{id}", async (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, int id, ValoresHaPagarUpdateDto valoresHaPagarUpdateDto) => {
  var valorHaPagar = await valoresHaPagarRepo.GetValoresHaPagarId(id);
  if(valorHaPagar == null) {
    return Results.NotFound();
  }
  mapper.Map(valoresHaPagarUpdateDto, valorHaPagar);
  await valoresHaPagarRepo.SaveChangesAsync();
  return Results.NoContent();
});
app.MapDelete("api/valoresHaPagar/{id}", async (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, int id) => {
  var valorHaPagar = await valoresHaPagarRepo.GetValoresHaPagarId(id);
  if(valorHaPagar == null) {
    return Results.NotFound();
  }
  valoresHaPagarRepo.DeleteValoresHaPagar(valorHaPagar);
  await valoresHaPagarRepo.SaveChangesAsync();
  return Results.Ok("Deleção bem sucedida");
});

// api/valoresHaPagarJaPagos
app.MapPost("api/valoresHaPagarJaPagos", async (IValoresHaPagarJaPagosRepo valoresHaPagarJaPagosRepo, IMapper mapper, ValoresHaPagarJaPagosCreateDto valoresHaPagarJaPagosCreateDto) => {
  var valorHaPagarJaPagosModel = mapper.Map<ValoresHaPagarJaPagos>(valoresHaPagarJaPagosCreateDto);
  await valoresHaPagarJaPagosRepo.CreateValoresHaPagarJaPagos(valorHaPagarJaPagosModel);
  await valoresHaPagarJaPagosRepo.SaveChangesAsync();
  var valorHaPagarJaPagosRead = mapper.Map<ValoresHaPagarJaPagosReadDto>(valorHaPagarJaPagosModel);
  return Results.Created($"api/valoresHaPagarJaPagos/{valorHaPagarJaPagosRead.codigo}", valorHaPagarJaPagosRead);
});
app.MapGet("api/valoresHaPagarJaPagos/{id}", (IValoresHaPagarJaPagosRepo valoresHaPagarJaPagosRepo, IMapper mapper, int id) => {
  var valoresHaPagarJaPagos = valoresHaPagarJaPagosRepo.GetAllValoresHaPagarJaPagos(id);
  return Results.Ok(mapper.Map<IEnumerable<ValoresHaPagarJaPagosReadDto>>(valoresHaPagarJaPagos));
});
app.MapPut("api/valoresHaPagarJaPagos/{id}", async (IValoresHaPagarJaPagosRepo valoresHaPagarJaPagosRepo, IMapper mapper, int id, ValoresHaPagarJaPagosUpdateDto valoresHaPagarJaPagosUpdateDto) => {
  var valorHaPagarJaPagos = await valoresHaPagarJaPagosRepo.GetValoresHaPagarJaPagosId(id);
  if(valorHaPagarJaPagos == null) {
    return Results.NotFound();
  }
  mapper.Map(valoresHaPagarJaPagosUpdateDto, valorHaPagarJaPagos);
  await valoresHaPagarJaPagosRepo.SaveChangesAsync();
  return Results.NoContent();
});
app.MapDelete("api/valoresHaPagarJaPagos/{id}", async (IValoresHaPagarJaPagosRepo valoresHaPagarJaPagosRepo, IMapper mapper, int id) => {
  var valorPagarJaPago = await valoresHaPagarJaPagosRepo.GetValoresHaPagarJaPagosId(id);
  if(valorPagarJaPago == null) {
    return Results.NotFound();
  }
  valoresHaPagarJaPagosRepo.DeleteValoresHaPagar(valorPagarJaPago);
  await valoresHaPagarJaPagosRepo.SaveChangesAsync();
  return Results.Ok("Deleção bem sucedida");
});



// api/cartao/tipo/meioDePagamento
app.MapPost("api/cartao", async (ICartaoRepo cartaoRepo, IMapper mapper, CartaoCreateDto cartaoCreateDto) => {
  var cartaoModel = mapper.Map<Cartao>(cartaoCreateDto);
  await cartaoRepo.CreateCartao(cartaoModel);
  await cartaoRepo.SaveChangesAsync();
  var cartaoRead = mapper.Map<CartaoReadDto>(cartaoModel);
  return Results.Created($"api/cartao{cartaoRead.codigo}", cartaoRead);
});
app.MapPost("api/cartao/tipo", async (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper, TipoDeCartaoCreateDto tipoDeCartaoCreateDto) => {
  var tipoCartaoModel = mapper.Map<TipoDeCartao>(tipoDeCartaoCreateDto);
  await tipoDeCartaoRepo.CreateTipoDeCartao(tipoCartaoModel);
  await tipoDeCartaoRepo.SaveChangesAsync();
  var tipoCartaoRead = mapper.Map<TipoDeCartaoReadDto>(tipoCartaoModel);
  return Results.Created($"api/cartao{tipoCartaoRead.codigo}", tipoCartaoRead);
});
app.MapPost("api/cartao/tipo/meioDePagamento", async (IMeioDePagamentoRepo meioDePagamento, IMapper mapper, MeioDePagamentoCreateDto meioDePagamentoCreateDto) => {
 var meioDePagamentoModel = mapper.Map<MeioDePagamento>(meioDePagamentoCreateDto);
  await meioDePagamento.CreateMeioDePagamento(meioDePagamentoModel);
  await meioDePagamento.SaveChangesAsync();
  // var meioDePag = mapper.Map<>(meioDePagamentoModel);
  // return Results.Created($"api/cartao/tipo/meioDePagamento{meioDePag.codigo}", meioDePag);
});
app.MapGet("api/cartao", async (ICartaoRepo cartaoRepo, IMapper mapper) => {
  var cartao = await cartaoRepo.GetAllCartao();
  return Results.Ok(mapper.Map<IEnumerable<CartaoReadDto>>(cartao));
});
app.MapGet("api/cartaoByUser/{userId}", (ICartaoRepo cartaoRepo, IMapper mapper, int userId) => {
  var cartao = cartaoRepo.GetAllCartaoByUser(userId);
  return Results.Ok(mapper.Map<IEnumerable<CartaoReadDto>>(cartao));
});
app.MapGet("api/cartao/tipo", async (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper) => {
  var tipoDeCartao = await tipoDeCartaoRepo.GetAllTipoDeCartao();
  return Results.Ok(mapper.Map<IEnumerable<TipoDeCartaoReadDto>>(tipoDeCartao));
});
app.MapGet("api/cartao/tipoByUser/{userId}", (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper, int userId) => {
  var tipoDeCartao = tipoDeCartaoRepo.GetAllTipoDeCartaoByUser(userId);
  return Results.Ok(mapper.Map<IEnumerable<TipoDeCartaoReadDto>>(tipoDeCartao));
});
app.MapGet("api/cartao/tipo/meioDePagamento", async (IMeioDePagamentoViewsRepo meioDePagamentoViewsRepo, IMapper mapper) => {
  var meioDePagamento = await meioDePagamentoViewsRepo.GetAllMeioDePagamentoViews();
  return Results.Ok(mapper.Map<IEnumerable<MeioDePagamentoViewsReadDto>>(meioDePagamento));
});
app.MapPost("api/cartao/tipo/meioDePagamentoByUser", (IMeioDePagamentoViewsRepo meioDePagamentoViewsRepo, UserFiltros userFiltros ,IMapper mapper) => {
  var useId = userFiltros.userCodigo;
  var meioDePagamento = meioDePagamentoViewsRepo.GetAllMeioDePagamentoViewsByUser(userFiltros.userCodigo);
  return Results.Ok(mapper.Map<IEnumerable<MeioDePagamentoViewsReadDto>>(meioDePagamento));
});
app.MapPut("api/cartao/tipo/meioDePagamento/{id}", async (IMeioDePagamentoRepo meioDePagamentoRepo, IMapper mapper, int id, MeioDePagamentoUpdateDto meioDePagamentoUpdateDto) => {
  var meioDePagamento = await meioDePagamentoRepo.GetMeioDePagamentoById(id);
  if(meioDePagamento == null) {
    return Results.NotFound();
  }
  mapper.Map(meioDePagamentoUpdateDto, meioDePagamento);
  await meioDePagamentoRepo.SaveChangesAsync();
  return Results.NoContent();
});
app.MapDelete("api/cartao/tipo/meioDePagamento/{id}", async (IMeioDePagamentoRepo meioDePagamentoRepo, IMapper mapper, int id) => {
  var meioDePagamento = await meioDePagamentoRepo.GetMeioDePagamentoById(id);
  if(meioDePagamento == null) {
    return Results.NotFound();
  }
  meioDePagamentoRepo.DeleteMeioDePagamento(meioDePagamento);
  await meioDePagamentoRepo.SaveChangesAsync();
  return Results.Ok("Deleção bem sucedida");
});



// api/users/infos
// app.MapPost("api/users/authentication", (IUsersInfosRepo usersInfosRepo, UserAuthenticationFiltros userAuthenticationFiltros ,IMapper mapper) => {
//   var userAuthentication = usersInfosRepo.GetUserAuthentication(userAuthenticationFiltros.email!, userAuthenticationFiltros.senha);
//   return Results.Ok();
// });
app.MapPost("api/users/infos", (IUsersInfosRepo usersInfosRepo, UserGetInfosFiltros userGetInfosFiltros ,IMapper mapper) => {
var userInfos = usersInfosRepo.GetUserInfosByUserLogin(userGetInfosFiltros.email!);
  return Results.Ok(mapper.Map<IEnumerable<UserInfosReadDtos>>(userInfos));
});







// // ainda não cheguei aqui
// app.MapPut("api/cartao/{id}", async (ICartaoRepo cartaoRepo, IMapper mapper, int id, CartaoUpdateDto cartaoUpdateDto) => {
//   var cartao = await cartaoRepo.GetCartaoId(id);
//   if(cartao == null) {
//     return Results.NotFound();
//   }
//   mapper.Map(cartaoUpdateDto, cartao);
//   await cartaoRepo.SaveChangesAsync();
//   return Results.NoContent();
// });
// app.MapGet("api/cartao/{id}", async (ICartaoRepo cartaoRepo, IMapper mapper, int id) => {
//   var cartao = await cartaoRepo.GetCartaoId(id);
//   if ( cartao != null ) {
//     return Results.Ok(mapper.Map<CartaoReadDto>(cartao));
//   }
//   return Results.NotFound();
// });
// app.MapDelete("api/cartao/{id}", async (ICartaoRepo cartaoRepo, IMapper mapper, int id) => {
//   var cartao = await cartaoRepo.GetCartaoId(id);
//   if(cartao == null) {
//     return Results.NotFound();
//   }
//   cartaoRepo.DeleteCartao(cartao);
//   await cartaoRepo.SaveChangesAsync();
//   return Results.Ok("Deleção bem sucedida");
// });
// app.MapGet("api/cartao/tipo/{id}", async (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper, int id) => {
//   var tipoDeCartao = await tipoDeCartaoRepo.GetTipoDeCartaoId(id);
//   if ( tipoDeCartao != null ) {
//     return Results.Ok(mapper.Map<TipoDeCartaoReadDto>(tipoDeCartao));
//   }
//   return Results.NotFound();
// });
// app.MapPut("api/cartao/tipo/{id}", async (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper, int id, TipoDeCartaoUpdateDto tipoDeCartaoUpdateDto) => {
//   var tipoDeCartao = await tipoDeCartaoRepo.GetTipoDeCartaoId(id);
//   if(tipoDeCartao == null) {
//     return Results.NotFound();
//   }
//   mapper.Map(tipoDeCartaoUpdateDto, tipoDeCartao);
//   await tipoDeCartaoRepo.SaveChangesAsync();
//   return Results.NoContent();
// });
// app.MapDelete("api/cartao/tipo/{id}", async (ITipoDeCartaoRepo tipoDeCartaoRepo, IMapper mapper, int id) => {
//   var tipoDeCartao = await tipoDeCartaoRepo.GetTipoDeCartaoId(id);
//   if(tipoDeCartao == null) {
//     return Results.NotFound();
//   }
//   tipoDeCartaoRepo.DeleteTipoDeCartao(tipoDeCartao);
//   await tipoDeCartaoRepo.SaveChangesAsync();
//   return Results.Ok("Deleção bem sucedida");
// });


app.Run("http://localhost:5000");
