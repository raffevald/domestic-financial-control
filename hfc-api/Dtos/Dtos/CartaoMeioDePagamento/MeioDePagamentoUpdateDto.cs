using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.CartaoMeioDePagamento
{
  public class MeioDePagamentoUpdateDto {
    public DateTime data_cadastro { get; set; }
    public int fk_cartao { get; set; }
    public int fk_tipo_de_cartao { get; set; }
    public int fk_usuario { get; set; }
  }
}