using AutoMapper;
using hfc_api.Models.CartaoMeioDePagamento;
using hfc_api.Dtos.Dtos.CartaoMeioDePagamento;

namespace hfc_api.Profiles.CartaoMeioDePagamento
{
  public class MeioDePagamentoViewsProfiles : Profile {
    public MeioDePagamentoViewsProfiles()
    {
      // Source -> Target
      CreateMap<MeioDePagamentoViews, MeioDePagamentoViewsReadDto>();
    }
  }
}