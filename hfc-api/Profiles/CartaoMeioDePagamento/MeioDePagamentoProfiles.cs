using AutoMapper;
using hfc_api.Dtos.Dtos.CartaoMeioDePagamento;
using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Profiles
{
  public class MeioDePagamentoProfiles : Profile {
    public MeioDePagamentoProfiles()
    {
      // Source -> Target
      CreateMap<MeioDePagamentoCreateDto, MeioDePagamento>();
      CreateMap<MeioDePagamentoUpdateDto, MeioDePagamento>();
    }
  }
}