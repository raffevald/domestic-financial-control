using AutoMapper;
using hfc_api.Dtos.Dtos.ValoresHaPagarJaPagos;
using hfc_api.Models;

namespace hfc_api.Profiles
{
  public class ValoresHaPagarJaPagosProfiles : Profile {
    public ValoresHaPagarJaPagosProfiles()
    {
      // Source -> Target
      CreateMap<ValoresHaPagarJaPagos, ValoresHaPagarJaPagosReadDto>();
      CreateMap<ValoresHaPagarJaPagosCreateDto, ValoresHaPagarJaPagos>();
      CreateMap<ValoresHaPagarJaPagosUpdateDto, ValoresHaPagarJaPagos>();
    }
  }
}