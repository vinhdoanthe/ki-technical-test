from django.test import TestCase

from investment.models import Investment


class InvestmentListViewTest(TestCase):
    """
    Test the InvestmentListView view
    """
    def setUp(self):
        Investment.objects.create(
            ville='Paris',
            annee_de_livraison=2022,
            etat_d_avancement='En cours'
        )

        Investment.objects.create(
            ville='Marseille',
            annee_de_livraison=2023,
            etat_d_avancement='En cours'
        )

    def test_get_list_investment_success(self):
        response = self.client.get('/investments/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

        self.assertEqual(response.data[0]['ville'], 'Paris')
        self.assertEqual(response.data[0]['annee_de_livraison'], 2022)
        self.assertEqual(response.data[0]['etat_d_avancement'], 'En cours')

        self.assertEqual(response.data[1]['ville'], 'Marseille')
        self.assertEqual(response.data[1]['annee_de_livraison'], 2023)
        self.assertEqual(response.data[1]['etat_d_avancement'], 'En cours')

    def test_filter_investment_by_ville_success(self):
        response = self.client.get('/investments/?ville=Paris')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        self.assertEqual(response.data[0]['ville'], 'Paris')
        self.assertEqual(response.data[0]['annee_de_livraison'], 2022)
        self.assertEqual(response.data[0]['etat_d_avancement'], 'En cours')

    def test_filter_investment_by_etat_d_avancement_success(self):
        response = self.client.get('/investments/?etat_d_avancement=En cours')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

        self.assertEqual(response.data[0]['ville'], 'Paris')
        self.assertEqual(response.data[0]['annee_de_livraison'], 2022)
        self.assertEqual(response.data[0]['etat_d_avancement'], 'En cours')

        self.assertEqual(response.data[1]['ville'], 'Marseille')
        self.assertEqual(response.data[1]['annee_de_livraison'], 2023)
        self.assertEqual(response.data[1]['etat_d_avancement'], 'En cours')


class InvestmentDetailUpdateViewTest(TestCase):
    """
    Test the InvestmentDetailUpdateView view
    """
    def setUp(self):
        self.investment_1 = Investment.objects.create(
            ville='Paris',
            annee_de_livraison=2022,
            etat_d_avancement='En cours'
        )

    def test_get_detail_success(self):
        response = self.client.get('/investments/{}/'.format(self.investment_1.id))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['ville'], 'Paris')
        self.assertEqual(response.data['annee_de_livraison'], 2022)
        self.assertEqual(response.data['etat_d_avancement'], 'En cours')

    def test_patch_update_success(self):
        response = self.client.patch(
            '/investments/{}/'.format(self.investment_1.id),
            {
                'ville': 'Marseille',
            },
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['ville'], 'Marseille')
        self.assertEqual(response.data['annee_de_livraison'], 2022)
        self.assertEqual(response.data['etat_d_avancement'], 'En cours')
