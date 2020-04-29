import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import VMasker from 'vanilla-masker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  simulator = this.fb.group({
    value: [
      '',
      {
        validators: this.valueValidate(300),
        updateOn: 'blur',
      },
    ],
    option: ['', Validators.required],
    installments: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  public onSubmit(): void {
    let reason = this.simulator.get('option').value;
    let ammount = this.simulator.get('value').value;
    let installments = this.simulator.get('installments').value;
    let url = `https://app.fibercash.com.br/cadastro/dados?reason=${reason}&ammount=${ammount}&installments=${installments}`;
    window.location.href = url;
  }

  public setInstallmentsOptionReset(): any {
    let opcoes_parcela = `<option value="" selected disabled>
      Selecione uma opção
    </option>`;
    if (document.getElementById('installments'))
      document.getElementById('installments').innerHTML = opcoes_parcela;
  }

  public setInstallmentsOption(ammount: number): any {
    let opcoes_parcela = `<option value="">
    Selecione uma opção
  </option>`;
    for (let prazo = 4; prazo < 13; prazo++) {
      let juros = ammount * prazo * 0.0099;
      let igp_m = ammount * ((0.068178 * prazo) / 12);
      let iof_pf = ammount * 30.42 * prazo * 0.000082;
      let iof_add = ammount * 0.0038;
      let iof = iof_pf + iof_add;

      let anti_fraude = 12;
      let clicksign = 3;
      let custo_adicional = anti_fraude + clicksign;

      let total = juros + igp_m + iof + custo_adicional + ammount;

      let taxa_adquirencia = 0.0267;
      let adquirencia = total / (1 - taxa_adquirencia) - total;
      let gateway = 0.3;

      let total_pagar = total + adquirencia + gateway;

      let valor_parcela = total_pagar / prazo;
      let valor_parcelaText = valor_parcela.toFixed(2);

      let str_parcela = `${prazo}x de ${valor_parcelaText}`.replace('.', ',');

      opcoes_parcela += `<option value="${prazo}" ${
        prazo === 4 ? 'selected' : ''
      }>${str_parcela}</option>`;
    }

    document.getElementById('installments').innerHTML = opcoes_parcela;
  }

  public valueValidate(limit: number): any {
    return (control) => {
      if (!control.value) return null;
      let value = control.value.replace(/([A-Z$.,])+/g, '');
      value = value.split('');
      value =
        value.slice(1, value.length - 2).join('') +
        '.' +
        value.slice(value.length - 2, value.length).join('');
      value = parseFloat(value);
      this.setInstallmentsOption(value);
      if (value < limit) {
        this.setInstallmentsOptionReset();
        return { name: 'minValue', minValue: limit, actualValue: value };
      }
      return null;
    };
  }

  public setMask(): void {
    VMasker(document.getElementById('value')).maskMoney({
      // Decimal precision -> "90"
      precision: 2,
      // Decimal separator -> ",90"
      separator: ',',
      // Number delimiter -> "12.345.678"
      delimiter: '.',
      // Money unit -> "R$ 12.345.678,90"
      unit: 'R$',
      // Money unit -> "12.345.678,90 R$"
      suffixUnit: '',
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: false,
    });
  }

  ngOnInit(): void {
    document.getElementById('installments').addEventListener(
      'change',
      (e) => {
        this.simulator
          .get('installments')
          .setValue((e.target as HTMLInputElement)?.value);
      },
      false
    );
    this.setMask();
  }
}
