using AutoMapper;
using hfc_api.Dtos.Dtos.CartaoMeioDePagamento;
using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Profiles
{
  public class TipoDeCartaoProfiles : Profile {
    public TipoDeCartaoProfiles()
    {
      // Source -> Target
      CreateMap<TipoDeCartao, TipoDeCartaoReadDto>();
      CreateMap<TipoDeCartaoCreateDto, TipoDeCartao>();
      CreateMap<TipoDeCartaoUpdateDto, TipoDeCartao>();
    }
  }
}