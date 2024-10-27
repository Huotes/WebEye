import sherlock
from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'search/index.html')

def ignorant_search(request):
    # Lógica de integração com o Ignorant
    pass

def holehe_search(request):
    # Lógica de integração com o Holehe
    pass

def ghunt_search(request):
    # Lógica de integração com o GHunt
    pass

def sherlock_search(request):
    username = request.GET.get("username")  # Recebe o nome de usuário via parâmetro GET
    if not username:
        return JsonResponse({"error": "Nome de usuário não fornecido."}, status=400)

    # Executa a pesquisa com Sherlock
    results = {}
    try:
        sherlock.Sherlock(username).search()  # Executa a busca pelo nome de usuário
        results = sherlock.get_results(username)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"results": results})