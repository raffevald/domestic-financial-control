namespace hfc_api.Dtos.Views
{
  public class ValoresHaPagarReadDtoViews{
    public int codigo { get; set; }
    public string? status {get; set; }
    public DateTime data_vencimento { get; set; }
    public float valor_total { get; set; }
    public string? descricao {get; set; }
    public DateTime data_cadastro { get; set; }
    public int parcelas_totais { get; set; }
    public int parcelas_pagas { get; set; }
    public int? valor_total_pago { get; set; }
  }
}