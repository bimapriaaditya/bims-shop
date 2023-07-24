from django.shortcuts import render
from django.views.generic import View

class DashboardProduct(View):

    def get(self, request):

        context = {
            "page_resources": "products/main.jsx"
        }

        return render(request, "preact-app/templates/app/index.html", context)