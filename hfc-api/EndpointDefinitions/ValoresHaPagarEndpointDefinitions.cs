using hfc_api.SecreSauce;

namespace hfc_api.EndpointDefinitions
{
    public class ValoresHaPagarEndpointDefinitions : IEndpointDefinition
    {
        public void DefineEndPoints(WebApplication app) {
            // api/valoresHaPagar
            app.MapPost("api/valoresHaPagar", async (IValoresHaPagarRepo valoresHaPagarRepo, IMapper mapper, ValoresHaPagarCreateDto valoresHaPagarCreateDto) => {
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
        }

        public void DefineServices(IServiceCollection services) {
            services.AddSingleton<ValoresHaPagarRepo>();
        }
    }
}