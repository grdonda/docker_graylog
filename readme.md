## Nodejs Graylog Gelf

> Testes com Graylog.

## Referências

> https://docs.graylog.org/en/3.3/pages/installation/docker.html#settings  
> Use o exemplo da documentação para V3 do docker compose.

## Dados de acesso

> localhost:9090 (admin/admin) - Graylog  
> localhost:3000 - Nodejs (endpoints)  

No ambiente nodejs, em http://localhost:3000, acesse:  
1. http://localhost:3000/  
Api rodando
2. http://localhost:3000/graylog/test  
Dispara o evento para o Graylog

## Criação do input
O input é responsável por captar os dados. Para efeito de testes uso UDP.

>bind_address: 0.0.0.0  
>decompress_size_limit: 8388608  
>number_worker_threads: 2  
>override_source: <empty>  
>port: 12201  
>recv_buffer_size: 262144  



IMPORTANTE:  
**Em desenvolvimento e melhorias**