using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.ValoresHaPagar
{
  public class ValoresHaPagarUpdateDto {
    public string? status {get; set; }
    [Required]
    public DateTime data_vencimento { get; set; }
    public float valor_total { get; set; }
    public string? descricao {get; set; }
    [Required]
    public DateTime data_cadastro { get; set; }
    public int parcelas_totais { get; set; }
    public int parcelas_pagas { get; set; }
    public int status_dados { get; set; }
  }
}
