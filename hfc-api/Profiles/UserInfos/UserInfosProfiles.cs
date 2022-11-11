using AutoMapper;
using hfc_api.Dtos.Dtos.UserInfosDtos;
using hfc_api.Models.UserInfosModels;

namespace hfc_api.Profiles
{
  public class UserInfosProfiles : Profile {
    public UserInfosProfiles()
    {
      // Source -> Target
      CreateMap<UserInfos, UserInfosReadDtos>();
      // CreateMap<TipoDeCartaoCreateDto, TipoDeCartao>();
      // CreateMap<TipoDeCartaoUpdateDto, TipoDeCartao>();
    }
  }
}