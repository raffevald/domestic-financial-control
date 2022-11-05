using AutoMapper;
using hfc_api.Dtos.Views;
using hfc_api.Models.Views;

namespace hfc_api.Profiles
{
  public class ValoresHaPagarProfileViews : Profile {
    public ValoresHaPagarProfileViews()
    {
      // Source -> Target
      CreateMap<ValoresHaPagarViews, ValoresHaPagarReadDtoViews>();
    }
  }
}