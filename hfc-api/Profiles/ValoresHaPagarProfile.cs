using AutoMapper;
using hfc_api.Dtos;
using hfc_api.Models;
using hfc_api.Dtos.Dtos.ValoresHaPagar;

namespace hfc_api.Profiles
{
  public class ValoresHaPagarProfile : Profile {
    public ValoresHaPagarProfile()
    {
      // Source -> Target
      CreateMap<ValoresHaPagar, ValoresHaPagarReadDto>();
      CreateMap<ValoresHaPagarCreateDto, ValoresHaPagar>();
      CreateMap<ValoresHaPagarUpdateDto, ValoresHaPagar>();
      CreateMap<ValoresHaPagarInativacaoDto, ValoresHaPagar>();
    }
  }
}